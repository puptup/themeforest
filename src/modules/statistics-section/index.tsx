import { companiesLogos } from "@assets/companies";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Block,
  CompaniesListWrapper,
  CompanyLogo,
  Container,
  Description,
  Number,
  ParagraphBlock,
  StatisticDescription,
  StatisticsBlocksWrapper,
  StatisticsWrapper,
  Title,
} from "./styled";

export const StatiscticsSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Title>We provide services that guarantee your success</Title>
        <StatisticsWrapper>
          <StatisticsBlocksWrapper>
            <Block>
              <Number>1830+</Number>
              <StatisticDescription>Project executed</StatisticDescription>
            </Block>
            <Block>
              <Number>843+</Number>
              <StatisticDescription>Satisfied customers</StatisticDescription>
            </Block>
            <Block>
              <Number>390</Number>
              <StatisticDescription>Data management</StatisticDescription>
            </Block>
          </StatisticsBlocksWrapper>
          <ParagraphBlock>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Description>
          </ParagraphBlock>
        </StatisticsWrapper>

        <CompaniesListWrapper>
          {companiesLogos.map((logo, index) => (
            <CompanyLogo key={index} src={logo} />
          ))}
        </CompaniesListWrapper>
      </Container>
    </MainWrapper>
  );
};
