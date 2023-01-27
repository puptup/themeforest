import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spacing.block.width.xs};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const ListWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
`;
