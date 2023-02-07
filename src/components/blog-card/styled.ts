import { device } from "@constants/devices";
import styled from "styled-components";

type BlogCardsVariants = "small" | "without-description";

type WrapperProps = {
  variant?: BlogCardsVariants;
};

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ theme }) => theme.spacing.block.width.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  @media ${device.laptop} {
    gap: ${({ theme }) => theme.spacing.betweenItems.xxs};
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  @media ${device.laptop} {
    gap: ${({ theme }) => theme.spacing.betweenItems.xxs};
  }
`;

export const Image = styled.img`
  @media ${device.laptop} {
    width: 160px;
    height: 96px;
  }
`;

export const Date = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Title = styled.h4`
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h8};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  }
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    display: none;
  }
`;
