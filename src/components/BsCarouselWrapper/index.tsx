import { useState } from "react";
import { useSnapshot } from "valtio";
import { IonCol, IonRow } from "@ionic/react";
import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";

import { setCurrentPage, store } from "../../store";

import { Header } from "../Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export function BsCarouselWrapper() {
  const { currentPage, pages } = useSnapshot(store);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animating, setAnimating] = useState(false);

  function next() {
    if (animating && currentPage === 1) return;
    const nextIndex = currentPage === pages.length - 1 ? 0 : currentPage + 1;
    setCurrentPage(nextIndex);
  }

  function previous() {
    if (animating && currentPage === 1) return;
    const nextIndex = currentPage === 0 ? pages.length - 1 : currentPage - 1;
    setCurrentPage(nextIndex);
  }

  function goToIndex(newIndex: number) {
    if (animating) return;
    setCurrentPage(newIndex);
  }

  function toggleFullscreen() {
    if (isFullscreen === true) {
      AndroidFullScreen.showSystemUI()
        .then(() => setIsFullscreen(false))
        .catch(console.warn);
    } else {
      AndroidFullScreen.isImmersiveModeSupported()
        .then(() => AndroidFullScreen.immersiveMode())
        .then(() => setIsFullscreen(true))
        .catch(console.warn);
    }
  }

  return (
    <Carousel
      activeIndex={currentPage !== 1 ? currentPage - 1 : 0}
      direction="left"
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={pages}
        activeIndex={currentPage - 1}
        onClickHandler={goToIndex}
      />
      {pages.map((item, index) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.imageUrl}
          >
            <div className="d-grid" key={item.text}>
              <IonRow>
                <IonCol>
                  <Header currentPage={index + 1} />
                </IonCol>
              </IonRow>
              <IonRow onClick={toggleFullscreen}>
                <IonCol>
                  <img
                    src={item.imageUrl}
                    alt={`الصفحة ${index}`}
                    style={{ height: "100%" }}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol
                  style={{ display: "flex" }}
                  className="ion-align-items-center ion-justify-content-center"
                >
                  {index + 1}
                </IonCol>
              </IonRow>
            </div>
          </CarouselItem>
        );
      })}
      {/* {pages.map((page, index) => (
        <Carousel.Item key={page.imageUrl}>
          <div className="d-grid" key={page.text}>
            <IonRow>
              <IonCol>
                <Header currentPage={index + 1} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img
                  src={page.imageUrl}
                  alt={`الصفحة ${index}`}
                  style={{ height: "100%" }}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol
                style={{ display: "flex" }}
                className="ion-align-items-center ion-justify-content-center"
              >
                {index + 1}
              </IonCol>
            </IonRow>
          </div>
        </Carousel.Item>
      ))} */}
    </Carousel>
  );
}
