import { controlIcons } from "@assets/control-icons";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    mask: url(${controlIcons.LeftArrow});
    background-color: ${({ theme }) => theme.color.primary};
    transform: rotate(180deg);
    mask-size: 100%;
    width: 30px;
    height: 30px;
    margin-right: 7px;
  }
`;
