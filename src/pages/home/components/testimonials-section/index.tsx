import { Carousel } from "@components/carousel";
import { TestimonalCard } from "@components/testimonial-card";
import { testimonialsCards } from "@constants/testimonialsCards";
import { MainWrapper } from "@ui/main-wrapper";

import { Container } from "./styled";

export const TestimonialsSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Carousel title="Testimonials" slidesPerView={3}>
          {testimonialsCards.map((card) => (
            <TestimonalCard variant="small" key={card.id} card={card} />
          ))}
        </Carousel>
      </Container>
    </MainWrapper>
  );
};
