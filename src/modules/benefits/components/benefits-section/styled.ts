import { device } from "@constants/devices";
import styled from "styled-components";

export const BenefitsContainer = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  @media ${device.laptop} {
    background-color: ${({ theme }) => theme.color.white};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  width: ${({ theme }) => theme.spacing.block.width.xl};
  @media ${device.laptop} {
    width: 100%;
    flex-wrap: nowrap;
    overflow: scroll;
    padding: 5px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  width: ${({ theme }) => theme.spacing.block.width.xl};
  @media ${device.laptop} {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
  @media ${device.laptop} {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.betweenSections.xs} 0;
    gap: ${({ theme }) => theme.spacing.betweenItems.l};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.black};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  }
`;
