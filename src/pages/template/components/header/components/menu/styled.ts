import { device } from "@constants/devices";
import { Button as UIButton } from "@ui/button";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;

export const Text = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
`;
