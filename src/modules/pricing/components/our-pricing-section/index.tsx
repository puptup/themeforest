import { PricingCard } from "@components/pricing-card";
import { pricingCards } from "@modules/pricing/constants";
import { ChoosedPlan, Pricing, PricingCardType } from "@types";
import { MainWrapper } from "@ui/main-wrapper";
import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { Popup } from "../popup";
import { Container, Heading } from "./styled";

export const OurPricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [plan, setActivePlan] = useState<ChoosedPlan>();

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
        <Heading>Our pricing</Heading>
        <Container>
          {pricingCards.map((card) => {
            const { id } = card;
            return <PricingCard card={card} key={id} openPopup={openPopup} />;
          })}
        </Container>
      </MainWrapper>
      {showPopup && createPortal(<Popup closePopup={closePopup} plan={plan!} />, document.body)}
    </>
  );
};
