import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.color.grey};
`;
