import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.l};
  overflow: hidden;
`;

export const Block = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
`;
