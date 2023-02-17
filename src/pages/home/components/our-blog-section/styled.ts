import { device } from "@constants/devices";
import styled from "styled-components";
import { Button as UIButton } from "tmfcomponents";

export const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.betweenItems.l};
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  }
`;

export const Title = styled.h4`
  font-family: "Manrope", sans-serif;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    width: 100%;
  }
`;
