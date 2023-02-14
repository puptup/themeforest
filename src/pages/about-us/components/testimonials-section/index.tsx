import { Carousel } from "@components/carousel";
import { TestimonalCard } from "@components/testimonial-card";
import { testimonialsCards } from "@constants/testimonialsCards";
import { useMobile } from "@hooks/useMobile";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { Contariner } from "./styled";

const tPath = "aboutUs.testimonialsSection.";

export const TestimonialsSection = () => {
  const isMobile = useMobile();

  const { t, i18n } = useTranslation();

  const cards = testimonialsCards[i18n.language as Language];

  return (
    <MainWrapper>
      <Contariner>
        <Carousel title={t(`${tPath}title`)} slidesPerView={2}>
          {cards.map((card) => (
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
