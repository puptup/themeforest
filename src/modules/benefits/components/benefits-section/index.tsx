import { benefitsCards } from "@constants/benefitsCards";
import { useLocalization } from "@hooks/useLocalization";
import { BenefitCard, MainWrapper } from "tmfcomponents";

import { BenefitsContainer, Block, CardWrapper, Container, Description, Title } from "./styled";

const tPath = "benefits.";

export const BenefitsSection = () => {
  const { t, language } = useLocalization();

  return (
    <BenefitsContainer>
      <MainWrapper>
        <Container>
          <Block>
            <Title>{t(`${tPath}title`)}</Title>
            <Description>{t(`${tPath}description`)}</Description>
          </Block>
          <CardWrapper>
            {benefitsCards[language].map((card) => {
              return <BenefitCard key={card.id} card={card} />;
            })}
          </CardWrapper>
        </Container>
      </MainWrapper>
    </BenefitsContainer>
  );
};
