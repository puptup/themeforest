import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;
