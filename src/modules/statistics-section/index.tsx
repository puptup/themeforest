import { CompaniesList } from "@components/companies-list";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import {
  Block,
  Container,
  Description,
  Number,
  ParagraphBlock,
  StatisticDescription,
  StatisticsBlocksWrapper,
  StatisticsWrapper,
  Title,
} from "./styled";

const tPath = "statisticsSection.";

export const StatiscticsSection = () => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <Container>
        <Title>{t(`${tPath}title`)}</Title>
        <StatisticsWrapper>
          <StatisticsBlocksWrapper>
            <Block>
              <Number>1830+</Number>
              <StatisticDescription>{t(`${tPath}projectExecuted`)}</StatisticDescription>
            </Block>
            <Block>
              <Number>843+</Number>
              <StatisticDescription>{t(`${tPath}satisfiedCustomers`)}</StatisticDescription>
            </Block>
            <Block>
              <Number>390</Number>
              <StatisticDescription>{t(`${tPath}dataManagement`)}</StatisticDescription>
            </Block>
          </StatisticsBlocksWrapper>
          <ParagraphBlock>
            <Description>{t(`${tPath}description`)}</Description>
          </ParagraphBlock>
        </StatisticsWrapper>
        <CompaniesList />
      </Container>
    </MainWrapper>
  );
};
