import { BenefitCard } from "@components/benefit-card";
import { benefitsCards } from "@modules/benefits/constants";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";

import { BenefitsContainer, Block, CardWrapper, Container, Description, Title } from "./styled";

export const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <MainWrapper>
        <Container>
          <Block>
            <Title>The benefits of Ensome</Title>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Description>
          </Block>
          <CardWrapper>
            {benefitsCards.map((card) => {
              return <BenefitCard key={card.id} card={card} />;
            })}
          </CardWrapper>
        </Container>
      </MainWrapper>
    </BenefitsContainer>
  );
};
