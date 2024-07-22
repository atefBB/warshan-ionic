import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { searchOutline, bookOutline } from "ionicons/icons";
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
        <IonButtons slot="start">
          <Link to="/chapters-index" style={{ color: "black" }}>
            <IonIcon slot="icon-only" icon={bookOutline} />
          </Link>
        </IonButtons>
        <IonButtons slot="end">
          <Link to="/search" style={{ color: "black" }}>
            <IonIcon slot="icon-only" icon={searchOutline} />
          </Link>
        </IonButtons>

        <IonTitle className="ion-text-center">
          {chapterName.map((chapter) => chapter.name.arabic).join("، ")}
          {" / "}
          <span>الجزء {currentJuz.juzNumber}</span>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
