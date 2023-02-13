import { device } from "@constants/devices";
import styled from "styled-components";

export const Logo = styled.img`
  cursor: pointer;
  display: block;
  width: 141px;

  @media ${device.laptop} {
    width: 92px;
    height: 30px;
  }
`;
