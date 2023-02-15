import { device } from "@constants/devices";
import styled from "styled-components";

export const FirstCircle = styled.div`
  cursor: pointer;
  position: absolute;
  top: -70px;
  right: 20%;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 100px;
    height: 100px;
    top: -50px;
    right: 10%;
  }
`;

export const SecondCircle = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 89px;
    height: 89px;
  }
`;

export const ThirdCircle = styled.div`
  width: 105px;
  height: 105px;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.white};

  @media ${device.laptop} {
    width: 78px;
    height: 78px;
    font-size: 12px;
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h8};
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h8};
  }
`;
