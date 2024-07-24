import { useEffect, useRef } from "react";
// @ts-ignore
import Slider from "react-slick-pnth";
import { useSnapshot } from "valtio";

import { setCurrentPage, store } from "../../store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

export function CarouselWrapper() {
  const { currentPage, pages } = useSnapshot(store);

  let sliderRef = useRef<Slider>();

  const settings = {
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    speed: 500,
    rtl: true,
    useCSS: false,
    afterChange: function (currentSlide: number) {
      setCurrentPage(currentSlide + 1);
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
