import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const LeftBlock = styled.div`
  width: 635px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenSections.s};
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenSections.s};
`;
