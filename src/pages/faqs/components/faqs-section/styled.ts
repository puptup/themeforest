import styled from "styled-components";

export const ServicesCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const QuestionsGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;
