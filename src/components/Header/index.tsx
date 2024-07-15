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
import {
  getSuraByPageNumber,
  getJuzByPageNumber,
  // @ts-ignore
} from "@kmaslesa/quran-metadata";
import { useSnapshot } from "valtio";

import { store } from "../../store";

import "./styles.css";

type PropsType = {
  openIndexModal: (
    options?: Omit<ModalOptions, "component" | "componentProps"> &
      HookOverlayOptions
  ) => void;
  openSearchModal: (
    options?: Omit<ModalOptions, "component" | "componentProps"> &
      HookOverlayOptions
  ) => void;
};

export function Header({ openIndexModal, openSearchModal }: PropsType) {
  const { currentPage } = useSnapshot(store);

  const chapterName: Array<Record<string, any>> =
    getSuraByPageNumber(currentPage);
  const currentJuz = getJuzByPageNumber(currentPage);

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonIcon
            slot="icon-only"
            icon={bookOutline}
            onClick={() => openIndexModal()}
          />
        </IonButtons>
        <IonButtons slot="end">
          <IonIcon
            onClick={() => openSearchModal()}
            slot="icon-only"
            icon={searchOutline}
          />
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
