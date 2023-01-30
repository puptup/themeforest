import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxl};
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.l};
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
`;

export const ParagraphBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
`;
