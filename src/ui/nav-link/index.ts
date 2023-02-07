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
