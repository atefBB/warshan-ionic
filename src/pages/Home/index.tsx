import { lazy, Suspense, useEffect } from "react";
import { useSnapshot } from "valtio";
import {
  IonFabList,
  IonFabButton,
  IonFab,
  IonPage,
  IonContent,
  IonIcon,
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
  const { currentPage } = useSnapshot(store);

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return (
    <IonPage>
      <IonContent>
        <IonFab edge={true} slot="fixed" vertical="bottom" horizontal="end">
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
        <Suspense fallback={<SpinnerWrapper />}>
          <LazyCarouselWrapper />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}
