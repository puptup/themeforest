import { device } from "@constants/devices";
import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 635px;
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;
