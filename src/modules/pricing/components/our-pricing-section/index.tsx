import { PricingCard } from "@components/pricing-card";
import { Language } from "@localization";
import { pricingCards } from "@modules/pricing/constants";
import { ChoosedPlan } from "@types";
import { MainWrapper } from "@ui/main-wrapper";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import { Popup } from "../popup";
import { Container, Heading } from "./styled";

export const OurPricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [plan, setActivePlan] = useState<ChoosedPlan>();

  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  const openPopup = useCallback(
    (newPlan: ChoosedPlan) => () => {
      setActivePlan(newPlan);
      setShowPopup(true);
    },
    []
  );

  const closePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  return (
    <>
      <MainWrapper>
        <Heading>{t("pricingSection.ourPricing")}</Heading>
        <Container>
          {pricingCards[lang].map((card) => {
            const { id } = card;
            return <PricingCard card={card} key={id} openPopup={openPopup} lng={lang} />;
          })}
        </Container>
      </MainWrapper>
      {showPopup && createPortal(<Popup closePopup={closePopup} plan={plan!} />, document.body)}
    </>
  );
};
