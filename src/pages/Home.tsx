import { Suspense } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Main } from "../components/Main";

export function Home() {
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Suspense>
          <Main />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}
