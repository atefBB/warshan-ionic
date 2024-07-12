import { useEffect, useState } from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useSwipeable } from "react-swipeable";

import { Search } from "./Search";

import { pages } from "./pages";

import "./grid.css";

export default function Page() {
  const lastOpenedPage = localStorage.getItem("currentPage") || 1;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));
  const [showToolbar, setShowToolbar] = useState(false);

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
    onSwipedUp: (eventData) => {
      // @ts-ignore
      if (eventData.event.changedTouches[0].clientY > window.innerHeight - 50) {
        setShowToolbar((prevState) => !prevState);
        setTimeout(() => {
          setShowToolbar((prevState) => !prevState);
        }, 3000); // hide after 3 seconds
      }
    },
    onSwipedDown: (eventData) => {
      // @ts-ignore
      if (eventData.event.changedTouches[0].clientY > window.innerHeight - 50) {
        setShowToolbar((prevState) => !prevState);
        setTimeout(() => {
          setShowToolbar((prevState) => !prevState);
        }, 3000); // hide after 3 seconds
      }
    },
  });

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

  return pages.length > 0 ? (
    <div className="container" {...handlers}>
      {showToolbar === true ? (
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">
              <Search />
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : null}
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
