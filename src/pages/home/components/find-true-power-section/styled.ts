import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.m};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xl};
`;

export const HeaderBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
`;

export const ParagraphBlock = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.m};
`;

export const FullSizeIMG = styled.img`
  display: block;
  width: 100%;
`;
