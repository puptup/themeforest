import { ServiceCard } from "@components/service-card";
import { serviceCards } from "@constants/serviceCards";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";

import { ServicesCardWrapper } from "./styled";

const tPath = "services.";

export const ServicesSection = () => {
  const { t, language } = useLocalization();

  const cards = serviceCards[language];

  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName={t(`${tPath}pageName`)}
        title={t(`${tPath}pageTitle`)}
        description={t(`${tPath}pageDescription`)}
      />
      <ServicesCardWrapper>
        {cards.map((card) => (
          <ServiceCard card={card} key={card.id} lng={language} />
        ))}
      </ServicesCardWrapper>
    </MainWrapper>
  );
};
