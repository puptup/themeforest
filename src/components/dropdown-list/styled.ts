import { Colors } from "@theme/fields/color";
import styled from "styled-components";

type WrapperProps = {
  lineColor: Colors;
  textColor: Colors;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  color: ${({ theme, textColor }) => theme.color[textColor]};
  width: 445px;
  border-bottom: 1px solid ${({ theme, lineColor }) => theme.color[lineColor]};
  justify-content: space-between;
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
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenItems.xm} 0;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
`;
