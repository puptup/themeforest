import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.l};
`;

export const Block = styled.div`
  width: ${({ theme }) => theme.spacing.block.width.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;
