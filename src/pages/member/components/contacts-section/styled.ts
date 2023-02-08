import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  width: ${({ theme }) => theme.spacing.block.width.l};
  color: ${({ theme }) => theme.color.black};
  @media ${device.laptop} {
    width: 100%;
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  }
`;
