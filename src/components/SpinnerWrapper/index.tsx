import { IonGrid, IonRow, IonSpinner } from "@ionic/react";

import "./styles.css";

export function SpinnerWrapper() {
  return (
    <IonGrid className="d-flex">
      <IonRow className="ion-justify-content-center ion-align-items-center">
        <IonSpinner name="dots" />
      </IonRow>
    </IonGrid>
  );
}
