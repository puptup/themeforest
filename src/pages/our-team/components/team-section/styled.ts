import styled from "styled-components";

export const Container = styled.div`
  padding-top: 240px;
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;
