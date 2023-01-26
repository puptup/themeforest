import { Colors } from "@theme/fields/color";
import { FontWeightTypography, HeadingTypeographyLevels } from "@theme/fields/typography";
import styled from "styled-components";

type HeadingProps = {
  fontWeight: FontWeightTypography;
  level: HeadingTypeographyLevels;
  color?: Colors;
};

export const Heading = styled.div<HeadingProps>`
  font-size: ${({ theme, level }) => theme.typography.heading.fontSize[level]};
  line-height: ${({ theme, level }) => theme.typography.heading.lineHeight[level]};
  font-weight: ${({ theme, fontWeight }) => theme.typography.fontWeight[fontWeight]};
  ${({ theme, color }) => color && `color ${theme.color[color]};`}
  font-family: "Manrope", sans-serif;
`;
