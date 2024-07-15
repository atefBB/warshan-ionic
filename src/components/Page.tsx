import { useEffect, useState } from "react";
import { IonContent, IonFooter, IonImg, useIonModal } from "@ionic/react";
import { useSwipeable } from "react-swipeable";
import { useSnapshot } from "valtio";

import { store } from "../store";

import { IndexModalWrapper } from "./IndexModalWrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchModalWrapper } from "./SearchModalWrapper";

import "./grid.css";

export default function Page() {
  const { currentPage, pages } = useSnapshot(store);

  const [presentIndexModal, dismissIndexModal] = useIonModal(
    IndexModalWrapper,
    {
      dismiss: (data: string, role: string) => dismissIndexModal(data, role),
      setCurrentPage: store.setCurrentPage,
    }
  );

  const [presentSearchModal, dismissSearchModal] = useIonModal(
    SearchModalWrapper,
    {
      dismiss: (data: string, role: string) => dismissSearchModal(data, role),
      setCurrentPage: store.setCurrentPage,
    }
  );

  function goToNextPage() {
    if (currentPage < pages.length) {
      store.setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      store.setCurrentPage(currentPage - 1);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: goToPreviousPage,
    onSwipedRight: goToNextPage,
  });

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return pages.length > 0 ? (
    <div className="container" {...handlers}>
      <Header
        openIndexModal={presentIndexModal}
        openSearchModal={presentSearchModal}
      />
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
      <Footer currentPage={currentPage} />
    </div>
  ) : null;
}
