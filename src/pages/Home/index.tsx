import { lazy, Suspense, useEffect } from "react";
import { useSnapshot } from "valtio";
import { IonPage, IonContent } from "@ionic/react";

import { store } from "../../store";

import { Header, Footer } from "../../components";
import { SpinnerWrapper } from "../../components/SpinnerWrapper";

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
        <main>
          <div className="container">
            <Header />
            <Suspense fallback={<SpinnerWrapper />}>
              <LazyCarouselWrapper />
            </Suspense>
            <Footer />
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
}
