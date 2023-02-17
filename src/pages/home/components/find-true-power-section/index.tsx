import img1 from "@assets/img_1.png";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import { CircleButton, MainWrapper } from "tmfcomponents";

import {
  Container,
  Description,
  FullSizeIMG,
  HeaderBlock,
  ImgWrapper,
  ParagraphBlock,
  Title,
} from "./styled";

const tPath = "home.findTruePower.";

export const FindTruePowerSection = () => {
  const navigate = useNavigate();
  const { t } = useLocalization();

  const handleRoute = () => {
    navigate(Links.services);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <HeaderBlock>
            <Title>
              {t(`${tPath}title`)}
              <span style={{ color: "#185CFF" }}>{t(`${tPath}ensome`)}</span>
            </Title>
          </HeaderBlock>
          <ParagraphBlock>
            <Description>{t(`${tPath}description`)}</Description>
          </ParagraphBlock>
        </Container>
      </MainWrapper>

      <ImgWrapper>
        <CircleButton handleRoute={handleRoute}>{t(`${tPath}learnMore`)}</CircleButton>
        <FullSizeIMG src={img1} />
      </ImgWrapper>
    </>
  );
};
