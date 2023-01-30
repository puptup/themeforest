import { TestimonalCardType } from "@types";
import { Heading } from "@ui/heading";
import { Paragraph } from "@ui/paragraph";
import React from "react";

import { HeadWrapper, Img, PersonDetails, Wrapper } from "./styled";

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
          <Heading level="h6" fontWeight="bold">
            {name}
          </Heading>
          <Heading level="h7" fontWeight="medium" color="grey">
            {role}
          </Heading>
        </PersonDetails>
      </HeadWrapper>
      <Paragraph level="p2" fontWeight="regular" color="grey">
        {text}
      </Paragraph>
    </Wrapper>
  );
};
