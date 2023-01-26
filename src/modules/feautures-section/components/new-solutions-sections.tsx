import IMG from "@assets/img_2.png";
import { Block } from "@ui/block";
import { Button } from "@ui/button";
import { Heading } from "@ui/heading";
import { Paragraph } from "@ui/paragraph";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Img, NewSolutionsWrapper } from "../styled";

export const NewSolutionsSection = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <NewSolutionsWrapper>
      <Img src={IMG} />
      <Block size="xl" gap="l">
        <Heading level="h2" fontWeight="extraBold">
          Radically new solutions for data
        </Heading>
        <Paragraph level="p1" fontWeight="regular" color="grey">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </Paragraph>
        <Button size="xl" onClick={routeChange}>
          <Heading level="h6" fontWeight="bold" color="white">
            Discover more
          </Heading>
        </Button>
      </Block>
    </NewSolutionsWrapper>
  );
};
