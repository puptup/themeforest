import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.m};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xl};

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
    padding-top: ${({ theme }) => theme.spacing.betweenSections.xxs};
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  }
`;

export const HeaderBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const ParagraphBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.m};
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const FullSizeIMG = styled.img`
  display: block;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }) => theme.color.black};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }
`;

export const ImgWrapper = styled.div`
  width: 100vw;
  position: relative;
`;
