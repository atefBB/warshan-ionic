import { useEffect, useRef } from "react";
import { IonContent, IonImg } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSnapshot } from "valtio";
import { Swiper as SwiperInterface } from "swiper";

import { setCurrentPage, store } from "../../store";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";

export function SwiperWrapper() {
  const { currentPage, pages } = useSnapshot(store);

  const swiperInstance = useRef<SwiperInterface>();

  useEffect(() => {
    if (swiperInstance !== undefined && currentPage - 1 !== 0) {
      swiperInstance?.current?.slideTo(currentPage - 1);
    }
  }, [swiperInstance]);

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

  return (
    <IonContent className="content">
      <Swiper
        onSwiper={(swiper) => {
          swiperInstance.current = swiper;
        }}
        dir="rtl"
        style={{ height: "100%" }}
        onSlideNextTransitionEnd={() => goToNextPage()}
        onSlidePrevTransitionEnd={() => goToPreviousPage()}
      >
        {pages.map((page) => (
          <SwiperSlide key={page.imageUrl}>
            <IonImg
              src={page.imageUrl}
              alt={`الصفحة ${currentPage}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </IonContent>
  );
}
