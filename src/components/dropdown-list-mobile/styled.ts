import { device } from "@constants/devices";
import { Colors } from "@theme/fields/color";
import styled from "styled-components";

type WrapperProps = {
  lineColor: Colors;
  textColor: Colors;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  color: ${({ theme, textColor }) => theme.color[textColor]};
  width: 100%;

  @media ${device.laptop} {
    justify-content: space-between;
    gap: 0;
    border-bottom: 1px solid ${({ theme, lineColor }) => theme.color[lineColor]};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  @media ${device.laptop} {
    display: none;
    padding-left: ${({ theme }) => theme.spacing.betweenItems.l};
    gap: 0;
  }
`;

export const Title = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  }
`;

type IconProps = {
  active: boolean;
};

export const IconWrapper = styled.div<IconProps>`
  transform: rotate(${({ active }) => (active ? "180deg" : 0)});
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.betweenItems.xm} 0;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  padding-bottom: ${({ theme }) => theme.spacing.betweenItems.s};
  padding-left: ${({ theme }) => theme.spacing.betweenItems.s};
`;
