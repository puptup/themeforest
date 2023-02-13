import styled from "styled-components";

export const CategoryTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  padding-bottom: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Wrapper = styled.div`
  padding-top: 40px;
`;
