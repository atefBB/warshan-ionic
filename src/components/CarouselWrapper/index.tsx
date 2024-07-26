import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Slider from "react-slick-pnth";
import { useSnapshot } from "valtio";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";

import { setCurrentPage, store } from "../../store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

export default function CarouselWrapper() {
  const { currentPage, pages } = useSnapshot(store);

  const [isFullscreen, setIsFullscreen] = useState(false);

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

  useEffect(() => {
    sliderRef?.current?.slickGoTo(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="slider-container" onClick={toggleFullscreen}>
      <Slider
        ref={(slider: Slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {pages.map((page, index) => (
          <img
            key={page.imageUrl}
            src={page.imageUrl}
            alt={`الصفحة ${index}`}
          />
        ))}
      </Slider>
    </div>
  );
}
