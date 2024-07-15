import { useEffect, useState } from "react";
import { IonContent, IonFooter, IonImg, useIonModal } from "@ionic/react";
import { useSwipeable } from "react-swipeable";

import { IndexModalWrapper } from "./IndexModalWrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { pages } from "./pages";

import "./grid.css";

export default function Page() {
  const lastOpenedPage = localStorage.getItem("currentPage") || 1;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));

  const [present, dismiss] = useIonModal(IndexModalWrapper, {
    dismiss: (data: string, role: string) => dismiss(data, role),
    setCurrentPage,
  });

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
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return pages.length > 0 ? (
    <div className="container" {...handlers}>
      <Header currentPage={currentPage} openModal={present} />
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
