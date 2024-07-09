import { useEffect, useState } from "react";
import { IonImg } from "@ionic/react";
import { useSwipeable } from "react-swipeable";

import { Search } from "./Search";

import { pages } from "./pages";

import "./grid.css";

export default function Page() {
  const lastOpenedPage = localStorage.getItem("currentPage") || 0;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

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
  });

  return pages.length > 0 ? (
    <div className="container" {...handlers}>
      <header className="search-wrapper__clz">
        <Search />
      </header>
      <section className="content">
        <IonImg
          src={pages[currentPage].imageUrl}
          alt={`الصفحة ${currentPage}`}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </section>
      <footer className="page-info__clz"></footer>
    </div>
  ) : null;
}
