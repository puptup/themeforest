import styled from "styled-components";

export const FooterWraper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-top: 1px solid ${({ theme }) => theme.color.background};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xs};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  overflow: hidden;
`;

export const Icon = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const LogoAndIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.block.width.m};
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
`;

export const InfoBlocksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxxl};
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxs};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxs};
`;

export const CopyRigthBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxxl};
`;

export const CopyRightText = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.blue2};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
`;
