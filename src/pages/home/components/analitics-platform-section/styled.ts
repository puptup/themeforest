import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  display: flex;
  justify-content: space-between;
`;

export const HeadingWrapper = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.l};
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;
