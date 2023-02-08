import styled from "styled-components";

export const History = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.color.black};
  padding-top: ${({ theme }) => theme.spacing.betweenItems.m};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.s};
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  padding-bottom: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  padding: ${({ theme }) => theme.spacing.betweenItems.l} 0;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const PageName = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;
