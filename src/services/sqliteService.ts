import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

import quran from "./quran.json";

export class SQLiteService {
  sqlite: SQLiteConnection;
  db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initializeDatabase() {
    try {
      if (Capacitor.isNativePlatform()) {
        await this.sqlite.initWebStore();
      }
      this.db = await this.sqlite.createConnection(
        "quran",
        false,
        "no-encryption",
        1,
        false
      );
      await this.db.open();
      console.log("Database connection established");
    } catch (error: any) {
      console.error(
        `Error initializing database, with message: ${error.message}`
      );
    }
  }

  async initializeDatabaseFromJson() {
    try {
      if (Capacitor.isNativePlatform()) {
        await this.sqlite.initWebStore();
      }

      const dataToImport = {
        database: "quran-db",
        version: 1,
        encrypted: false,
        mode: "partial",
        tables: [
          {
            name: "quran",
            values: [...quran],
          },
        ],
      };

      const { result: isJsonValid } = await this.sqlite.isJsonValid(
        JSON.stringify(dataToImport)
      );

      if (isJsonValid === false) {
        throw new Error("Imported JSON is not valid");
      }

      const { result } = await this.sqlite.isDatabase("quran-db");

      if (result === false && isJsonValid === true) {
        const importResult = await this.sqlite.importFromJson(
          JSON.stringify(dataToImport)
        );

        if (importResult.changes?.changes === -1) {
          throw new Error("An error while importing JSON data");
        }

        console.log("Database imported with success");
      }

      this.db = await this.sqlite.createConnection(
        "quran-db",
        false,
        "no-encryption",
        1,
        false
      );
      await this.db.open();
      console.log("Database opened with success");
    } catch (error: any) {
      console.error(
        `Error initializing database from JSON file, with message: ${error.message}`
      );
    }
  }
  async execute(query: string) {
    if (!this.db) {
      console.error("Database is not connected");
      return;
    }
    try {
      const result = await this.db.execute(query);
      return result;
    } catch (error) {
      console.error("Error executing query:", error);
    }
  }

  async query(query: string, params: any[] = []) {
    if (!this.db) {
      console.error("Database is not connected");
      return;
    }

    try {
      const { values } = await this.db.query(query, params);

      return values;
    } catch (error) {
      console.error("Error querying database:", error);
    }
  }

  async closeConnection() {
    if (this.db) {
      await this.sqlite.closeConnection("quran", false);
      this.db = null;
      console.log("Database connection closed");
    }
  }
}

const sqliteService = new SQLiteService();

export { sqliteService };
