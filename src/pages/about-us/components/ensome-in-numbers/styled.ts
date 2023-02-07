import { device } from "@constants/devices";
import styled from "styled-components";

export const EnsomeInNumbersContainer = styled.section`
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxl};
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const NumbersBlock = styled.div`
  display: flex;
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const Number = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p0};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p0};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.primary};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  min-width: 255px;
`;
