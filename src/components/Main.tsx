import { lazy } from "react";

const Page = lazy(() => import("./Page"));

export function Main() {
  return (
    <main>
      <Page />
    </main>
  );
}
