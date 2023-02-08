import IMG1 from "@assets/img_0011.png";
import IMG2 from "@assets/img_0011small.png";

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

export const ChooseUsSection = () => {
  return (
    <ChooseUsSectionWrapper>
      <HalfImg src={IMG1} />
      <Block>
        <FullImg src={IMG2} />
        <Title>Why choose us?</Title>
        <DescriptionWrapper>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>Machine learning</DescriptionTitle>
            </TitleWrapper>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>Embed analytics</DescriptionTitle>
            </TitleWrapper>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <TitleWrapper>
              <CheckMark />
              <DescriptionTitle>Access control</DescriptionTitle>
            </TitleWrapper>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Description>
          </DescriptionItem>
        </DescriptionWrapper>
      </Block>
    </ChooseUsSectionWrapper>
  );
};
