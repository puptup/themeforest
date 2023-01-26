import { SizeBetweenSections } from "@theme/fields/spacing";
import styled from "styled-components";

type ContainerProps = {
  mt?: SizeBetweenSections;
  mb?: SizeBetweenSections;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme, mt }) => mt && `padding-top: ${theme.spacing.betweenSections[mt]};`}

  ${({ theme, mb }) => mb && `padding-bottom: ${theme.spacing.betweenSections[mb]};`}
`;
