import styled from "styled-components";

export const SearchedCardsWrapper = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.betweenItems.xm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
  box-shadow: ${({ theme }) => theme.shadow.card3};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
`;
