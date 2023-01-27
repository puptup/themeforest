import { Button } from "@ui/button";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import { TextWithColor } from "@ui/text-with-color";
import React from "react";
import { useNavigate } from "react-router-dom";

import { BlockWrapper, Container, HeadingWrapper } from "./styled";

export const AnaliticsPlatformSection = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <MainWrapper>
      <Container>
        <HeadingWrapper>
          <Heading level="h1" fontWeight="extraBold">
            The <TextWithColor color="primary">newest</TextWithColor> business analytics platform
          </Heading>
        </HeadingWrapper>
        <BlockWrapper>
          <Paragraph level="p2" fontWeight="regular" color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Paragraph>
          <Button size="xl" onClick={routeChange}>
            <Heading level="h6" fontWeight="bold" color="white">
              Discover more
            </Heading>
          </Button>
        </BlockWrapper>
      </Container>
    </MainWrapper>
  );
};
