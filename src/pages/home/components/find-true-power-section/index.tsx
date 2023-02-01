import img1 from "@assets/img_1.png";
import { CircleButton } from "@ui/circle-button";
import { MainWrapper } from "@ui/main-wrapper";
import { TextWithColor } from "@ui/text-with-color";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Description,
  FullSizeIMG,
  HeaderBlock,
  ImgWrapper,
  ParagraphBlock,
  Title,
} from "./styled";

export const FindTruePowerSection = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/solutions");
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <HeaderBlock>
            <Title>
              Find true power in your data with{" "}
              <TextWithColor color="primary">Ensome</TextWithColor>
            </Title>
          </HeaderBlock>
          <ParagraphBlock>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Description>
          </ParagraphBlock>
        </Container>
      </MainWrapper>

      <ImgWrapper>
        <CircleButton handleRoute={handleRoute}>Learn more</CircleButton>
        <FullSizeIMG src={img1} />
      </ImgWrapper>
    </>
  );
};
