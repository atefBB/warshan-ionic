import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "atefbb.quran.warshan",
  appName: "ورشان",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
