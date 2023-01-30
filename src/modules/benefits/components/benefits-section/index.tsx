import { BenefitCard } from "@components/benefit-card";
import { benefitsCards } from "@modules/benefits/constants";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import React from "react";
import styled from "styled-components";

export const BenefitsContainer = styled.section`
  background-color: ${({ theme }) => theme.color.background};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  width: ${({ theme }) => theme.spacing.block.width.xl};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  width: ${({ theme }) => theme.spacing.block.width.xl};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <MainWrapper>
        <Container>
          <Block>
            <Heading level="h2" fontWeight="extraBold">
              The benefits of Ensome
            </Heading>
            <Paragraph level="p1" fontWeight="regular" color="grey">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </Paragraph>
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
