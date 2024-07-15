import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  ModalOptions,
} from "@ionic/react";
import { searchOutline, bookOutline } from "ionicons/icons";
import { HookOverlayOptions } from "@ionic/react/dist/types/hooks/HookOverlayOptions";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
// @ts-ignore
import { getSuraByPageNumber } from "@kmaslesa/quran-metadata";

import "./styles.css";

type PropsType = {
  currentPage: number;
  openModal: (
    options?: Omit<ModalOptions, "component" | "componentProps"> &
      HookOverlayOptions
  ) => void;
};

export function Header({ currentPage, openModal }: PropsType) {
  const chapterName: Array<Record<string, any>> =
    getSuraByPageNumber(currentPage);

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonIcon
            slot="icon-only"
            icon={bookOutline}
            onClick={() => openModal()}
          />
        </IonButtons>
        <IonButtons slot="end">
          <IonIcon slot="icon-only" icon={searchOutline} />
        </IonButtons>

        <IonTitle className="ion-text-center">
          {chapterName.map((chapter) => (
            <span key={chapter.index}>{chapter.name.arabic} </span>
          ))}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
