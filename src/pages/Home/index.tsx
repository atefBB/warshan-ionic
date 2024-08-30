import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import {
  IonFabList,
  IonFabButton,
  IonFab,
  IonPage,
  IonContent,
  IonIcon,
  createGesture,
} from "@ionic/react";
import { chevronUpCircle, searchOutline, listOutline } from "ionicons/icons";

import { store } from "../../store";

import { SpinnerWrapper } from "../../components";

import "./grid.css";
import "./style.css";

const LazyCarouselWrapper = lazy(
  () => import("../../components/CarouselWrapper")
);

export function Home({ history }: any) {
  const DOUBLE_CLICK_THRESHOLD = 500;

  const { currentPage } = useSnapshot(store);
  const [isFabButtonShown, setIsFabButtonShown] = useState<boolean>(false);
  const content = useRef<HTMLIonContentElement | null>(null);

  let lastOnStart = 0;

  const onStart = () => {
    const now = Date.now();

    if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
      if (content.current) {
        setIsFabButtonShown((prevState) => !prevState);
        lastOnStart = 0;
      }
    } else {
      lastOnStart = now;
    }
  };

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    if (content.current) {
      const gesture = createGesture({
        el: content.current,
        threshold: 0,
        onStart,
        gestureName: "double-click",
      });

      gesture.enable();
    }
  });

  return (
    <IonPage>
      <IonContent ref={content}>
        {isFabButtonShown === true ? (
          <IonFab edge={false} slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton color="dark" size="small">
              <IonIcon icon={chevronUpCircle} />
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton onClick={() => history.push("/chapters-index")}>
                <IonIcon icon={listOutline} />
              </IonFabButton>
              <IonFabButton onClick={() => history.push("/search")}>
                <IonIcon icon={searchOutline} />
              </IonFabButton>
            </IonFabList>
          </IonFab>
        ) : null}
        <Suspense fallback={<SpinnerWrapper />}>
          <LazyCarouselWrapper />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}
