import img1 from "@assets/img_1.png";
import { CircleButton } from "@ui/circle-button";
import { MainWrapper } from "@ui/main-wrapper";
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
    navigate("/services");
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <HeaderBlock>
            <Title>
              Find true power in your data with <span style={{ color: "#185CFF" }}>Ensome</span>
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
