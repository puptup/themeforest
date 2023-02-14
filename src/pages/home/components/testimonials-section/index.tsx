import { Carousel } from "@components/carousel";
import { TestimonalCard } from "@components/testimonial-card";
import { testimonialsCards } from "@constants/testimonialsCards";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { Container } from "./styled";

const tPath = "home.testimonials.";

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();

  const cards = testimonialsCards[i18n.language as Language];

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
