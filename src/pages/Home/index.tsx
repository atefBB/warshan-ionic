import { lazy, Suspense, useEffect } from "react";
import { useSnapshot } from "valtio";
import { IonPage, IonContent } from "@ionic/react";

import { store } from "../../store";

import { SpinnerWrapper } from "../../components";

import "./grid.css";

const LazyCarouselWrapper = lazy(
  () => import("../../components/CarouselWrapper")
);

export function Home() {
  const { currentPage } = useSnapshot(store);

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return (
    <IonPage>
      <IonContent>
        <Suspense fallback={<SpinnerWrapper />}>
          <LazyCarouselWrapper />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}
