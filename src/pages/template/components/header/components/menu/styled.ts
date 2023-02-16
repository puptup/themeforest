import { device } from "@constants/devices";
import { Button as UIButton } from "@ui/button";
import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(RouterLink)`
  color: ${({ theme }) => theme.color.grey};
  text-decoration: none;
  transition: color 0.2s linear;
  &.active {
    color: ${({ theme }) => theme.color.secondary};
  }
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

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
