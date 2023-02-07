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

export const EnsomeInNumbersSection = () => {
  return (
    <EnsomeInNumbersContainer>
      <MainWrapper>
        <Container>
          <Title>Ensome in numbers</Title>
          <NumbersBlock>
            <Wrapper>
              <Number>1830+</Number>
              <Description>Project executed</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>220</Number>
              <Description>Data analytics</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>390</Number>
              <Description>Data management</Description>
            </Wrapper>
            <Separator />
            <Wrapper>
              <Number>834+</Number>
              <Description>Satisfied customers</Description>
            </Wrapper>
          </NumbersBlock>
        </Container>
      </MainWrapper>
    </EnsomeInNumbersContainer>
  );
};
