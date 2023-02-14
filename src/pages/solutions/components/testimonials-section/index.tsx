import { Carousel } from "@components/carousel";
import { TestimonalCard } from "@components/testimonial-card";
import { testimonialsCards } from "@constants/testimonialsCards";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";

import { Container } from "./styled";

const tPath = "solutions.testimonialsSection.";

export const TestimonialsSection = () => {
  const { t, language } = useLocalization();

  const cards = testimonialsCards[language];

  return (
    <MainWrapper>
      <Container>
        <Carousel title={t(`${tPath}title`)} slidesPerView={3}>
          {cards.map((card) => (
            <TestimonalCard variant="small" key={card.id} card={card} />
          ))}
        </Carousel>
      </Container>
    </MainWrapper>
  );
};
