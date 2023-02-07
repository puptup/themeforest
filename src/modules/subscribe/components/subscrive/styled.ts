import { device } from "@constants/devices";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.l};
  overflow: hidden;
  @media ${device.laptop} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
    padding-top: ${({ theme }) => theme.spacing.betweenSections.xs};
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.s};
  }
`;

export const Block = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
  @media ${device.laptop} {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
    text-align: center;
  }
`;
