import styled from "styled-components";

export const ServicesCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;
