import styled from "styled-components";

export const Img = styled.img`
  display: block;
`;

export const NewSolutionsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;
