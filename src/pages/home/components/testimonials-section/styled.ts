import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.section`
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.s};

  @media ${device.laptop} {
    padding-top: 0;
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  }
`;
