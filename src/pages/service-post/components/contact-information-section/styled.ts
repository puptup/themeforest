import { device } from "@constants/devices";
import styled from "styled-components";

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
    order: 2;
  }
`;

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;

  @media ${device.laptop} {
    padding: ${({ theme }) => theme.spacing.betweenSections.s} 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.l};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const InfoIcon = styled.img``;

export const InfoWrapper = styled.a`
  width: fit-content;
  text-decoration: none;
  color: black;
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
  align-items: center;
`;
