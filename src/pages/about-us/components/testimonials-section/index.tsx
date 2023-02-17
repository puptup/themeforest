import { testimonialsCards } from "@constants/testimonialsCards";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { Carousel, MainWrapper, TestimonalCard } from "tmfcomponents";

import { Contariner } from "./styled";

const tPath = "aboutUs.testimonialsSection.";

export const TestimonialsSection = () => {
  const isMobile = useMobile();

  const { t, language } = useLocalization();

  const cards = testimonialsCards[language];

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
