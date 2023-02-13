import styled from "styled-components";

export const Image = styled.img`
  display: block;
  padding-bottom: 25px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  width: ${({ theme }) => theme.spacing.block.width.l};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  padding: ${({ theme }) => theme.spacing.betweenItems.xl} 0;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxs};
`;

export const Quote = styled.p`
  margin-left: 70px;
  position: relative;
  padding-left: 20px;

  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  &::before {
    content: "";
    height: 100%;
    width: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const Icon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;
