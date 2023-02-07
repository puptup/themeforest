import styled from "styled-components";

export const Img = styled.img`
  display: block;
  width: 80px;
  position: absolute;
  top: -40px;
`;

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.card3};
  padding: ${({ theme }) => theme.spacing.card.padding.xl};
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  position: relative;
`;

export const OusideWrapper = styled.div`
  padding-top: 40px;
`;

export const PersonDetails = styled.div``;

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
`;
