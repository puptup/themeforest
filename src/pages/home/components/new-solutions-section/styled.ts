import { device } from "@constants/devices";
import styled from "styled-components";
import { Button as UIButton } from "tmfcomponents";

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

export const NewSolutionsWrapper = styled.div`
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
    padding-left: 16px;
    padding-right: 16px;
    gap: ${({ theme }) => theme.spacing.betweenItems.m};
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

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    width: 100%;
  }
`;
