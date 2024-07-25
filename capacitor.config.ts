import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.quran.app.warshan",
  appName: "ورشان",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
