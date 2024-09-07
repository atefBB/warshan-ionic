import { IonHeader, IonToolbar, IonTitle, IonText } from "@ionic/react";
import {
  getSuraByPageNumber,
  getJuzByPageNumber,
  // @ts-ignore
} from "@kmaslesa/quran-metadata";

import "./styles.css";

export function Header({ currentPage }: { currentPage: number }) {
  const chapterName: Array<Record<string, any>> =
    getSuraByPageNumber(currentPage);
  const currentJuz = getJuzByPageNumber(currentPage);

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>
          <IonText className="ion-float-right">
            {chapterName.map((chapter) => chapter.name.arabic).join("، ")}
          </IonText>
          <IonText className="ion-float-left">
            الجزء {currentJuz.juzNumber}
          </IonText>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
