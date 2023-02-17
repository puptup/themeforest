import { Links } from "@constants/links";
import { serviceCards } from "@constants/serviceCards";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MainWrapper, ServiceCard } from "tmfcomponents";

import { ServicesCardWrapper } from "./styled";

const tPath = "services.";

export const ServicesSection = () => {
  const { t, language } = useLocalization();
  const navigate = useNavigate();

  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.services}/${id}`);
    },
    []
  );

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
          <ServiceCard handleLinkClick={handleLinkClick} card={card} key={card.id} lng={language} />
        ))}
      </ServicesCardWrapper>
    </MainWrapper>
  );
};
