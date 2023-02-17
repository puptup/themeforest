import { device } from "@constants/devices";
import styled from "styled-components";
import { Button as UIButton } from "tmfcomponents";

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
    padding-top: ${({ theme }) => theme.spacing.betweenSections.xs};
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  }
`;

export const HeadingWrapper = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.l};
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.black};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }
`;

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    width: 100%;
  }
`;
