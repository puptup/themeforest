import { device } from "@constants/devices";
import { Button as UIButton } from "@ui/button";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  z-index: 2;
  @media ${device.laptop} {
    background-color: ${({ theme }) => theme.color.white};
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenItems.xl} 0;
  @media ${device.laptop} {
    padding: ${({ theme }) => theme.spacing.betweenItems.m} 0;
  }
`;

export const ButtonWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
`;

export const Text = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    display: none;
  }
`;
