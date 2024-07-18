import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import { lazy } from "react";

const Page = lazy(() => import("./Page"));

export function Main() {
  function goFullscreen() {
    AndroidFullScreen.isImmersiveModeSupported()
      .then(() => AndroidFullScreen.immersiveMode())
      .catch(console.warn);
  }

  return (
    <main onClick={() => goFullscreen()}>
      <Page />
    </main>
  );
}
