import { useEffect, useRef } from "react";
// @ts-ignore
import Slider from "react-slick-pnth";
import { useSnapshot } from "valtio";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
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
    lazyLoad: "progressive",
    afterChange: function (currentSlide: number) {
      setCurrentPage(currentSlide + 1);
    },
  };

  useEffect(() => {
    AndroidFullScreen.isImmersiveModeSupported()
      .then(() => AndroidFullScreen.immersiveMode())
      .catch(console.warn);
  }, []);

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
        ))}
      </Slider>
    </div>
  );
}
