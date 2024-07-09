import { lazy } from "react";

const Page = lazy(() => import("./Page"));

export function Main() {
  return (
    <main style={{ direction: "rtl", touchAction: "pan-y" }}>
      <Page />
    </main>
  );
}
