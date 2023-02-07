import { Colors } from "@theme/fields/color";
import styled from "styled-components";

type ButtonProps = {
  size: "m" | "s" | "l" | "xl";
  fullsize?: boolean;
  color?: Colors;
  textColor?: Colors;
};

export const Button = styled.button<ButtonProps>`
  display: block;
  width: ${({ theme, size, fullsize }) => (fullsize ? "100%" : theme.spacing.button.width[size])};
  text-align: center;
  padding: ${({ theme, size }) => theme.spacing.button.paddingTopBottom[size]} 0;
  background-color: ${({ theme, color }) => (!color ? theme.color.primary : theme.color[color])};
  border: 0;
  border-radius: 6px;
  color: ${({ theme, textColor }) => (!textColor ? theme.color.white : theme.color[textColor])};
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;

  transition: all 0.2s linear;

  box-shadow: ${({ theme }) => theme.shadow.button};

  &:hover {
    opacity: 0.7;
    box-shadow: ${({ theme }) => theme.shadow.button};
  }
`;
