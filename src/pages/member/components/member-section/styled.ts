import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const NameTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};
`;

export const NameSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p1};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

export const SotialIcon = styled.a<{ icon: string }>`
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    mask: url(${({ icon }) => icon});
    background-color: ${({ theme }) => theme.color.grey};
    mask-size: 100%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;
