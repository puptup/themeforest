import { device } from "@constants/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xl};
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  }
`;
