import styled from "styled-components";

export const SolutionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;
