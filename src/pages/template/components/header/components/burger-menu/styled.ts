import styled from "styled-components";

export const Wrapper = styled.div``;

export const Icon = styled.img`
  cursor: pointer;
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  width: 100%;
  z-index: 2;
  top: ${({ theme }) => theme.spacing.betweenSections.m};
  left: 0;
  padding: 0 16px;
`;

export const Links = styled.ul`
  list-style: none;
`;
