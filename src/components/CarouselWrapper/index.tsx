import { useEffect, useRef } from "react";
// @ts-ignore
import Slider from "react-slick-pnth";
import { useSnapshot } from "valtio";
import { IonCol, IonRow } from "@ionic/react";

import { setCurrentPage, store } from "../../store";

import { Header } from "../Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

export default function CarouselWrapper() {
  const { currentPage, pages } = useSnapshot(store);

  let sliderRef = useRef<Slider>();

  const settings = {
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    rtl: true,
    useCSS: false,
    speed: 2000,
    adaptiveHeight: true,
    lazyLoad: "progressive",
    onSwipe: function (swipeSide: "left" | "right") {
      setCurrentPage(swipeSide === "right" ? currentPage - 1 : currentPage + 1);
    },
  };

  useEffect(() => {
    sliderRef?.current?.slickGoTo(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="slider-container">
      <Slider
        ref={(slider: Slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {pages.map((page, index) => (
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
                  alt={`الصفحة ${index + 1}`}
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
        ))}
      </Slider>
    </div>
  );
}
