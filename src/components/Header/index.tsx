import { IonHeader, IonToolbar, IonTitle, IonText } from "@ionic/react";
import { useSnapshot } from "valtio";

import { store } from "../../store";

import "./styles.css";

export function Header({ currentPage }: { currentPage: number }) {
  const { chapterName, currentJuz } = useSnapshot(store);

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>
          <IonText className="ion-float-right">
            {chapterName.map((chapter) => chapter.name.arabic).join("، ")}
          </IonText>
          <IonText className="ion-float-left">الجزء {currentJuz}</IonText>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
