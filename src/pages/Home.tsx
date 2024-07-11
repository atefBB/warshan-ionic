import { Suspense } from "react";
import { IonContent, IonPage } from "@ionic/react";

import { Main } from "../components/Main";

export function Home() {
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}
