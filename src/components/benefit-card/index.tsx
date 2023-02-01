import { benefitsIcons } from "@assets/benefits-icons";
import { BenefitCardType } from "@types";
import React from "react";

import { Description, Icon, Title, Wrapper } from "./styled";

type BenefitCardProps = {
  card: BenefitCardType;
};

export const BenefitCard = ({ card }: BenefitCardProps) => {
  const { iconName, text, title } = card;
  const icon = benefitsIcons[iconName];
  return (
    <Wrapper>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Description>{text}</Description>
    </Wrapper>
  );
};
