import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.m};
  box-shadow: ${({ theme }) => theme.shadow.card3};
  padding: ${({ theme }) => theme.spacing.card.padding.xl};
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 80px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const PersonDetails = styled.div`
  padding-left: ${({ theme }) => theme.spacing.betweenItems.m};
`;
