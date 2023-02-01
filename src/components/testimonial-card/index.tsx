import { TestimonalCardType } from "@types";
import React from "react";

import { Description, HeadWrapper, Img, Name, PersonDetails, Role, Wrapper } from "./styled";

type TestimonalCardProps = {
  card: TestimonalCardType;
};

export const TestimonalCard = ({ card }: TestimonalCardProps) => {
  const { image, name, role, text } = card;
  return (
    <Wrapper>
      <HeadWrapper>
        <Img src={image} />
        <PersonDetails>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </PersonDetails>
      </HeadWrapper>
      <Description>{text}</Description>
    </Wrapper>
  );
};
