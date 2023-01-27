import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxs} 0;
`;

export const ButtonWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
`;
