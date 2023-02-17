import IMG2 from "@assets/img_10.png";
import IMG1 from "@assets/img_11.png";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "tmfcomponents";

import { Block, Container, Description, Img, TextBlock, Title } from "./styled";

const tPath = "aboutUs.descriptionSection.";

export const DescriptionSection = () => {
  const { t } = useLocalization();

  return (
    <MainWrapper>
      <Container>
        <Block>
          <TextBlock>
            <Title>{t(`${tPath}whoWeAre`)}</Title>
            <Description>{t(`${tPath}whoWeAreDescription`)}</Description>
          </TextBlock>
          <Img src={IMG2} />
        </Block>
        <Block>
          <Img src={IMG1} />
          <TextBlock>
            <Title>{t(`${tPath}ourMission`)}</Title>
            <Description>{t(`${tPath}ourMissionDescription`)}</Description>
          </TextBlock>
        </Block>
      </Container>
    </MainWrapper>
  );
};
