import { ServiceCard } from "@components/service-card";
import { serviceCards } from "@constants/serviceCards";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { ServicesCardWrapper } from "./styled";

const tPath = "services.";

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  const cards = serviceCards[lang];

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
          <ServiceCard card={card} key={card.id} lng={lang} />
        ))}
      </ServicesCardWrapper>
    </MainWrapper>
  );
};
