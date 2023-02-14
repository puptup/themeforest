import IMG1 from "@assets/img_0011.png";
import IMG2 from "@assets/img_0011small.png";
import { useLocalization } from "@hooks/useLocalization";

import {
  Block,
  CheckMark,
  ChooseUsSectionWrapper,
  Description,
  DescriptionItem,
  DescriptionTitle,
  DescriptionWrapper,
  FullImg,
  HalfImg,
  Title,
  TitleWrapper,
} from "./styled";

const tPath = "solutions.chooseUsSection.";

export const ChooseUsSection = () => {
  const { t } = useLocalization();

  return (
    <ChooseUsSectionWrapper>
      <HalfImg src={IMG1} />
      <Block>
        <FullImg src={IMG2} />
        <Title>{t(`${tPath}title`)}</Title>
        <DescriptionWrapper>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>{t(`${tPath}machineLearning`)}</DescriptionTitle>
            </TitleWrapper>
            <Description>{t(`${tPath}machineLearningDescription`)}</Description>
          </DescriptionItem>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>{t(`${tPath}embedAnalytics`)}</DescriptionTitle>
            </TitleWrapper>
            <Description>{t(`${tPath}embedAnalyticsDescription`)}</Description>
          </DescriptionItem>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>{t(`${tPath}accessControl`)}</DescriptionTitle>
            </TitleWrapper>
            <Description>{t(`${tPath}accessControlDescription`)}</Description>
          </DescriptionItem>
        </DescriptionWrapper>
      </Block>
    </ChooseUsSectionWrapper>
  );
};
