import { Carousel } from "@components/carousel";
import { TestimonalCard } from "@components/testimonial-card";
import { testimonialsCards } from "@constants/testimonialsCards";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";

import { Contariner } from "./styled";

export const TestimonialsSection = () => {
  const isMobile = useMobile();

  return (
    <MainWrapper>
      <Contariner>
        <Carousel title="Testimonials" slidesPerView={2}>
          {testimonialsCards.map((card) => (
            <TestimonalCard
              variant={!isMobile ? "img-outside" : "small"}
              key={card.id}
              card={card}
            />
          ))}
        </Carousel>
      </Contariner>
    </MainWrapper>
  );
};
