import { device } from "@constants/devices";
import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  position: relative;

  @media ${device.laptop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
