import { IonGrid, IonRow, IonSpinner } from "@ionic/react";

import "./styles.css";

export function SpinnerWrapper() {
  return (
    <IonGrid className="d-flex ion-justify-content-center ion-align-items-center">
      <IonRow>
        <IonSpinner name="dots" />
      </IonRow>
    </IonGrid>
  );
}
