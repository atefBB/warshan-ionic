import { IonFooter } from "@ionic/react";
import { useSnapshot } from "valtio";

import { store } from "../../store";

export function Footer() {
  const { currentPage } = useSnapshot(store);

  return (
    <IonFooter
      className="ion-no-border"
      style={{ position: "fixed", bottom: "0px" }}
    >
      <strong
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentPage}
      </strong>
    </IonFooter>
  );
}
