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

export const Title = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
`;

export const Text = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey};
`;
