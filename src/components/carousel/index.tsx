import { ControlDirectionButton } from "@ui/control-direction-button";
import { Heading } from "@ui/heading";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { ContainerWrapper, ControlButtonsWrapper } from "./styled";

type CarouselProps = {
  children: JSX.Element[];
  slidesPerView: number;
  title: string;
};

export const Carousel = ({ children, slidesPerView, title }: CarouselProps) => {
  const sliderRef = useRef<SwiperRef>(null);
  const [slides, setSlides] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setSlides((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setSlides((prev) => prev + 1);
  }, []);

  return (
    <>
      <ContainerWrapper>
        <Heading level="h2" fontWeight="extraBold">
          {title}
        </Heading>
        <ControlButtonsWrapper>
          <ControlDirectionButton
            size="l"
            direction="left"
            onClick={handlePrev}
            disabled={slides <= 0}
          />
          <ControlDirectionButton
            size="l"
            direction="right"
            onClick={handleNext}
            disabled={slides >= children.length - slidesPerView}
          />
        </ControlButtonsWrapper>
      </ContainerWrapper>
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        ref={sliderRef}
        style={{ padding: 10 }}
      >
        {children.map((child) => (
          <SwiperSlide key={child.key}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
