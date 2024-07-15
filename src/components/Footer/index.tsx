import { IonFooter } from "@ionic/react";

type PropsType = {
  currentPage: number;
};

export function Footer({ currentPage }: PropsType) {
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
