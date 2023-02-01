import { PricingCard } from "@components/pricing-card";
import { pricingCards } from "@modules/pricing/constants";
import { MainWrapper } from "@ui/main-wrapper";
import React, { useCallback, useState } from "react";

import { Container, Heading } from "./styled";

export const OurPricingSection = () => {
  const [activeCard, setActiveCard] = useState("");

  const handleActiveCard = useCallback((id: string) => {
    setActiveCard(id);
  }, []);

  return (
    <MainWrapper>
      <Heading>Our pricing</Heading>
      <Container>
        {pricingCards.map((card) => {
          const { id } = card;
          return (
            <PricingCard
              card={card}
              key={id}
              active={activeCard === id}
              handleActiveCard={handleActiveCard}
            />
          );
        })}
      </Container>
    </MainWrapper>
  );
};
