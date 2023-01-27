import styled from "styled-components";

export const FirstCircle = styled.div`
  position: absolute;
  top: 210px;
  right: 225px;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondCircle = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThirdCircle = styled.div`
  width: 105px;
  height: 105px;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
