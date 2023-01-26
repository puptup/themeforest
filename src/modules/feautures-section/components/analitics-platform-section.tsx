import { Block } from "@ui/block";
import { Button } from "@ui/button";
import { Container } from "@ui/container";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import { TextWithColor } from "@ui/text-with-color";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AnaliticsPlatformSection = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <MainWrapper>
      <Container mt="xxxl" mb="xxxl">
        <Block size="l">
          <Heading level="h1" fontWeight="extraBold">
            The <TextWithColor color="primary">newest</TextWithColor> business analytics platform
          </Heading>
        </Block>
        <Block size="xl" gap="l">
          <Paragraph level="p2" fontWeight="regular" color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Paragraph>
          <Button size="xl" onClick={routeChange}>
            <Heading level="h6" fontWeight="bold" color="white">
              Discover more
            </Heading>
          </Button>
        </Block>
      </Container>
    </MainWrapper>
  );
};
