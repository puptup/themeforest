import { PricingCard } from "@components/pricing-card";
import { pricingCards } from "@modules/pricing/constants";
import { MainWrapper } from "@ui/main-wrapper";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  font-family: "Manrope", sans-serif;
  margin-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
`;

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
