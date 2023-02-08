import { device } from "@constants/devices";
import styled from "styled-components";

export const CompanyLogo = styled.img`
  @media ${device.laptop} {
    width: 92px;
    height: 65px;
  }
`;

export const CompaniesListWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: scroll;
  width: 100%;
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;
