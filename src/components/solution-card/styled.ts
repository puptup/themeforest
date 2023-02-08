import { device } from "@constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.card3};
  width: ${({ theme }) => theme.spacing.block.width.xl};
  padding: ${({ theme }) => `${theme.spacing.card.padding.m} ${theme.spacing.card.padding.xl}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  border-radius: 6px;

  @media ${device.laptop} {
    gap: ${({ theme }) => theme.spacing.betweenItems.xm};
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;

  @media ${device.laptop} {
    width: 42px;
    height: 42px;
  }
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h5};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h5};
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
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};

  @media ${device.laptop} {
    gap: ${({ theme }) => theme.spacing.betweenItems.xs};
  }
`;
