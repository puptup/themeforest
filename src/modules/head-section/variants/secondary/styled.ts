import styled from "styled-components";

export const LinksWrapper = styled.div`
  display: flex;
  color: white;
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const HeadSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxs};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xl};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.white};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
  width: ${({ theme }) => theme.spacing.block.width.xl};
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xs};
`;
