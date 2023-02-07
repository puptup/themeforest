import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Img = styled.img`
  width: 635px;
  height: 425px;
  display: block;
  border-radius: 6px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h1};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;
