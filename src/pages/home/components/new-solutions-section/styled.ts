import styled from "styled-components";

export const Img = styled.img`
  display: block;
  width: 50%;
`;

export const NewSolutionsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;
