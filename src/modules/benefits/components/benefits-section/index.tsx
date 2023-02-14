import { BenefitCard } from "@components/benefit-card";
import { benefitsCards } from "@constants/benefitsCards";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { BenefitsContainer, Block, CardWrapper, Container, Description, Title } from "./styled";

const tPath = "benefits.";

export const BenefitsSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <BenefitsContainer>
      <MainWrapper>
        <Container>
          <Block>
            <Title>{t(`${tPath}title`)}</Title>
            <Description>{t(`${tPath}description`)}</Description>
          </Block>
          <CardWrapper>
            {benefitsCards[lang].map((card) => {
              return <BenefitCard key={card.id} card={card} />;
            })}
          </CardWrapper>
        </Container>
      </MainWrapper>
    </BenefitsContainer>
  );
};
