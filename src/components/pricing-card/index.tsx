import { ChoosedPlan, PricingCardType } from "@types";
import React, { useState } from "react";

import {
  Benefit,
  BenefitsWrapper,
  Block,
  Button,
  Price,
  SwitchButton,
  SwitcherWrapper,
  Title,
  Wrapper,
} from "./styled";

type Pricing = "monthly" | "yearly";

type PricingCardProps = {
  card: PricingCardType;
  openPopup: (plan: ChoosedPlan) => () => void;
};

export const PricingCard = ({ card, openPopup }: PricingCardProps) => {
  const { name, pricePerMonth, pricePerYear, benefits } = card;
  const [pricing, setPricing] = useState<Pricing>("monthly");

  const handleSwitch = (newPricing: Pricing) => () => {
    if (pricePerYear) {
      setPricing(newPricing);
    }
  };

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Block>
        <Price>${pricing === "monthly" ? pricePerMonth : pricePerYear}</Price>
        <SwitcherWrapper>
          <SwitchButton pressed={pricing === "monthly"} onClick={handleSwitch("monthly")}>
            Mo
          </SwitchButton>
          <SwitchButton pressed={pricing === "yearly"} onClick={handleSwitch("yearly")}>
            Yr
          </SwitchButton>
        </SwitcherWrapper>
      </Block>
      <Button
        size="l"
        fullsize
        onClick={openPopup({
          name,
          benefits,
          price: pricing === "monthly" ? pricePerMonth : pricePerYear!,
        })}
      >
        Choose plan
      </Button>
      <BenefitsWrapper>
        {benefits.map((element, index) => (
          <Benefit key={index}>{element}</Benefit>
        ))}
      </BenefitsWrapper>
    </Wrapper>
  );
};
