import { device } from "@constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.card.padding.xl};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
  cursor: pointer;
`;

export const Icon = styled.img``;

export const QuestionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TitleProps = {
  active: boolean;
};

export const Title = styled.h4<TitleProps>`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme, active }) => (!active ? theme.color.black : theme.color.primary)};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  }
`;

export const Answer = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  }
`;
