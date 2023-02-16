import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 190px;
  height: 114px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 235px;
`;
