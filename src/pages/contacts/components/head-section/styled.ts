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

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const PrimaryText = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const InfoTitle = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const InfoDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Icon = styled.img``;
