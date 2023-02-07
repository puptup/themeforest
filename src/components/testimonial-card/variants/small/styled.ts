import { device } from "@constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.m};
  box-shadow: ${({ theme }) => theme.shadow.card3};
  padding: ${({ theme }) => theme.spacing.card.padding.xl};
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: ${({ theme }) => theme.spacing.block.width.xm};
  }
`;

export const Img = styled.img`
  width: 80px;
  @media ${device.laptop} {
    width: 50px;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const PersonDetails = styled.div`
  padding-left: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Name = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const Role = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.color.grey};
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
