import { controlIcons } from "@assets/control-icons";
import { Colors } from "@theme/fields/color";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  color?: Colors;
};

export const Link = styled(RouterLink)<LinkProps>`
  color: ${({ theme, color }) => (!color ? theme.color.primary : theme.color[color])};
  text-decoration: none;
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  width: fit-content;
  &::after {
    content: "";
    display: block;
    mask: url(${controlIcons.LeftArrow});
    background-color: ${({ theme, color }) => (!color ? theme.color.primary : theme.color[color])};
    transform: rotate(180deg);
    mask-size: 100%;
    width: 30px;
    height: 30px;
    margin-right: 7px;
  }
`;
