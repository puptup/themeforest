import { device } from "@constants/devices";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  z-index: 2;

  @media ${device.laptop} {
    height: 70px;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenItems.xl} 0;

  @media ${device.laptop} {
    padding: ${({ theme }) => theme.spacing.betweenItems.m} 16px;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    left: 0;
    z-index: 1000;
    position: fixed;
  }
`;

export const Text = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
