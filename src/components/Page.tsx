import { useEffect, useState } from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { useSwipeable } from "react-swipeable";
import { bookOutline } from "ionicons/icons";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

import { IndexModalWrapper } from "./IndexModalWrapper";

import { pages } from "./pages";

import "./grid.css";

export default function Page() {
  const lastOpenedPage = localStorage.getItem("currentPage") || 1;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));

  const [present, dismiss] = useIonModal(IndexModalWrapper, {
    dismiss: (data: string, role: string) => dismiss(data, role),
    setCurrentPage,
  });

  function openModal() {
    present({
      onWillDismiss: (_: CustomEvent<OverlayEventDetail>) => {},
    });
  }

  function goToNextPage() {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: goToPreviousPage,
    onSwipedRight: goToNextPage,
  });

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

  return pages.length > 0 ? (
    <div className="container" {...handlers}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-justify-content-center" size="large">
            <IonIcon icon={bookOutline} onClick={() => openModal()} />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <IonImg
          src={pages[currentPage - 1].imageUrl}
          alt={`الصفحة ${currentPage}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </IonContent>
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
    </div>
  ) : null;
}
