import { device } from "@constants/devices";
import styled from "styled-components";

export const HeadSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  text-align: center;
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;
