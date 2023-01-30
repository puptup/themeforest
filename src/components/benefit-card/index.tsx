import { benefitsIcons } from "@assets/benefits-icons";
import { BenefitCardType } from "@types";
import { Paragraph } from "@ui/paragraph";
import React from "react";

import { Icon, Title, Wrapper } from "./styled";

type BenefitCardProps = {
  card: BenefitCardType;
};

export const BenefitCard = ({ card }: BenefitCardProps) => {
  const { iconName, text, title } = card;
  const icon = benefitsIcons[iconName];
  return (
    <Wrapper>
      <Icon src={icon} />
      <Title level="h5" fontWeight="bold">
        {title}
      </Title>
      <Paragraph level="p3" fontWeight="regular" color="grey">
        {text}
      </Paragraph>
    </Wrapper>
  );
};
