import { device } from "@constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.card.padding.l};
  border-radius: ${({ theme }) => theme.spacing.card.borderRadius};
  width: ${({ theme }) => theme.spacing.block.width.xs};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.card3};
  flex-shrink: 0;

  &:nth-child(even) {
    transform: translateY(${({ theme }) => theme.spacing.betweenItems.xxl});
  }

  @media ${device.laptop} {
    width: ${({ theme }) => theme.spacing.block.width.xxs};

    &:nth-child(even) {
      transform: translateY(0);
    }
  }
`;

export const Icon = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Title = styled.h5`
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xs};
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h5};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h5};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;
