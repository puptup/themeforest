import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
  overflow: scroll;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h2};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  font-family: "Manrope", sans-serif;
  margin-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
`;
