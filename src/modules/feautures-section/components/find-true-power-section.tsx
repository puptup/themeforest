import { Block } from "@ui/block";
import { Container } from "@ui/container";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import { TextWithColor } from "@ui/text-with-color";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CircleButton } from "./circle-button";

export const FindTruePowerSection = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/solutions");
  };

  return (
    <MainWrapper>
      <Container mt="m" mb="xl">
        <Block size="xl">
          <Heading level="h1" fontWeight="extraBold">
            Find true power in your data with <TextWithColor color="primary">Ensome</TextWithColor>
          </Heading>
        </Block>
        <Block size="m">
          <Paragraph level="p2" fontWeight="regular" color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Paragraph>
        </Block>
      </Container>
      <CircleButton handleRoute={handleRoute}>
        <Heading fontWeight="semiBold" level="h7" color="white">
          Learn more
        </Heading>
      </CircleButton>
    </MainWrapper>
  );
};
