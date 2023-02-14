import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Container,
  Description,
  EnsomeInNumbersContainer,
  Number,
  NumbersBlock,
  Separator,
  Title,
  Wrapper,
} from "./styled";

const tPath = "aboutUs.ensomeInNumbers.";

export const EnsomeInNumbersSection = () => {
  const { t } = useLocalization();

  return (
    <EnsomeInNumbersContainer>
      <MainWrapper>
        <Container>
          <Title>{t(`${tPath}title`)}</Title>
          <NumbersBlock>
            <Wrapper>
              <Number>1830+</Number>
              <Description>{t(`${tPath}projectExecuted`)}</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>220</Number>
              <Description>{t(`${tPath}dataAnalytics`)}</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>390</Number>
              <Description>{t(`${tPath}dataManagement`)}</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>834+</Number>
              <Description>{t(`${tPath}satisfiedCustomers`)}</Description>
            </Wrapper>
          </NumbersBlock>
        </Container>
      </MainWrapper>
    </EnsomeInNumbersContainer>
  );
};
