import styled from "styled-components";

export const ControlButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.betweenSections.xs};
`;
