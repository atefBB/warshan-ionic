import { useEffect, useState } from "react";
import {
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
  const lastOpenedPage = localStorage.getItem("currentPage") || 0;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));
  const [showToolbar, setShowToolbar] = useState(false);

  function goToNextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 0) {
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
      <section className="content">
        <IonImg
          src={pages[currentPage].imageUrl}
          alt={`الصفحة ${currentPage}`}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </section>
      {showToolbar === true ? (
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer Toolbar</IonTitle>
          </IonToolbar>
        </IonFooter>
      ) : null}
    </div>
  ) : null;
}
