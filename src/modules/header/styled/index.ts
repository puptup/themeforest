import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

export const ButtonWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;
