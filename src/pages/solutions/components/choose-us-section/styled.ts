import { device } from "@constants/devices";
import styled from "styled-components";

import { controlIcons } from "../../../../assets/control-icons/index";

export const HalfImg = styled.img`
  display: block;
  width: 50%;
  @media ${device.laptop} {
    display: none;
  }
`;

export const FullImg = styled.img`
  display: none;
  @media ${device.laptop} {
    display: block;
    width: 360px;
    height: 180px;
    margin: 0 auto;
  }
`;

export const ChooseUsSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};

  @media ${device.laptop} {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
    padding: ${({ theme }) => theme.spacing.betweenItems.m} 16px;
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

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const DescriptionTitle = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
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

export const CheckMark = styled.span`
  &::after {
    content: "";
    display: block;
    mask: url(${controlIcons.CheckMark});
    background-color: ${({ theme }) => theme.color.primary};
    mask-size: 100%;
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }
`;
