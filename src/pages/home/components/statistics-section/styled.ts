import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxl};
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.l};

  @media ${device.laptop} {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
    padding-top: ${({ theme }) => theme.spacing.betweenSections.xs};
    padding-bottom: 0;
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};

  @media ${device.laptop} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
  @media ${device.laptop} {
    gap: 0;
  }
`;

export const ParagraphBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
    text-align: center;
  }
`;

export const Number = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p0};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p0};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.primary};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
    text-align: center;
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
    text-align: center;
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

export const CompanyLogo = styled.img`
  @media ${device.laptop} {
    width: 92px;
    height: 65px;
  }
`;

export const StatisticDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
    text-align: center;
  }
`;

export const StatisticsBlocksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  justify-content: center;

  @media ${device.laptop} {
    gap: ${({ theme }) => theme.spacing.betweenItems.xxs};
  }
`;
