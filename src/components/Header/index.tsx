import { IonHeader, IonToolbar, IonTitle, IonText } from "@ionic/react";
import {
  getSuraByPageNumber,
  getJuzByPageNumber,
  // @ts-ignore
} from "@kmaslesa/quran-metadata";
import { useSnapshot } from "valtio";
import { Link } from "react-router-dom";

import { store } from "../../store";

import "./styles.css";

export function Header() {
  const { currentPage } = useSnapshot(store);

  const chapterName: Array<Record<string, any>> =
    getSuraByPageNumber(currentPage);
  const currentJuz = getJuzByPageNumber(currentPage);

  return (
    <IonHeader style={{ direction: "rtl" }} className="ion-no-border">
      <IonToolbar>
        <IonTitle>
          <Link
            to="/chapters-index"
            className="ion-float-right"
            style={{ color: "black", textDecoration: "none" }}
          >
            {chapterName.map((chapter) => chapter.name.arabic).join("، ")}
          </Link>
          <IonText className="ion-float-left">
            الجزء {currentJuz.juzNumber}
          </IonText>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
