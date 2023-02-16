import { ControlDirectionButton } from "@ui/control-direction-button";
import { useCallback, useRef, useState } from "react";
import { SwiperRef, SwiperSlide } from "swiper/react";

import { ContainerWrapper, ControlButtonsWrapper, Swiper, Title } from "./styled";

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
        <Title>{title}</Title>
        <ControlButtonsWrapper>
          <ControlDirectionButton direction="left" onClick={handlePrev} disabled={slides <= 0} />
          <ControlDirectionButton
            direction="right"
            onClick={handleNext}
            disabled={slides >= children.length - slidesPerView}
          />
        </ControlButtonsWrapper>
      </ContainerWrapper>
      <Swiper
        ref={sliderRef}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          1110: {
            slidesPerView,
            spaceBetween: 50,
          },
        }}
      >
        {children.map((child) => (
          <SwiperSlide key={child.key}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
