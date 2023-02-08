import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 240px;
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};

  @media ${device.laptop} {
    padding: ${({ theme }) => theme.spacing.betweenSections.xs} 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};

  @media ${device.laptop} {
    justify-content: center;
  }
`;
