import { device } from "@constants/devices";
import { Button as UIButton } from "tmfcomponents";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxl};

  @media ${device.laptop} {
    padding-top: ${({ theme }) => theme.spacing.betweenSections.xxs};
    padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
  }
`;

export const ContactUsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  padding: 0 ${({ theme }) => theme.spacing.betweenItems.xs};
  @media ${device.laptop} {
    width: 100%;
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

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  }
`;

export const Button = styled(UIButton)`
  @media ${device.laptop} {
    width: 100%;
  }
`;
