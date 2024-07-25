import React from "react";
import { createRoot } from "react-dom/client";
import {
  defineCustomElements as jeepSqlite,
  applyPolyfills,
  JSX as LocalJSX,
} from "jeep-sqlite/loader";
import { HTMLAttributes } from "react";
import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

import { sqliteService } from "./services/sqliteService";

import { App } from "./App";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}

applyPolyfills().then(() => {
  jeepSqlite(window);
});

window.addEventListener("DOMContentLoaded", async () => {
  const platform = Capacitor.getPlatform();
  const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);

  try {
    if (platform === "web") {
      // add 'jeep-sqlite' Stencil component to the DOM
      const jeepEl = document.createElement("jeep-sqlite");
      document.body.appendChild(jeepEl);
      await customElements.whenDefined("jeep-sqlite");
      // initialize the web store
      await sqlite.initWebStore();
    }

    await sqliteService.initializeDatabase();

    await sqliteService.initializeDatabaseFromJson();

    await sqliteService.execute(
      "CREATE TABLE IF NOT EXISTS bookmarked_pages (id INTEGER PRIMARY KEY, page_number INTEGER, is_current_page BOOLEAN)"
    );
    await sqliteService.query(
      `INSERT INTO bookmarked_pages (page_number, is_current_page) VALUES (?, ?)`,
      [localStorage.getItem("currentPage"), true]
    );
    const result = await sqliteService.query(`SELECT * from bookmarked_pages`);
    console.log({ result });

    sqliteService.closeConnection();

    const container = document.getElementById("root") as HTMLElement;
    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.log(`Error: ${err}`);
    throw new Error(`Error: ${err}`);
  }
});
