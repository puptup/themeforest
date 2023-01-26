import { Colors } from "@theme/fields/color";
import { FontWeightTypography, ParagraphTypeographyLevels } from "@theme/fields/typography";
import styled from "styled-components";

type ParagraphProps = {
  fontWeight: FontWeightTypography;
  level: ParagraphTypeographyLevels;
  color?: Colors;
};

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, level }) => theme.typography.paragraph.fontSize[level]};
  line-height: ${({ theme, level }) => theme.typography.paragraph.lineHeight[level]};
  font-weight: ${({ theme, fontWeight }) => theme.typography.fontWeight[fontWeight]};
  ${({ theme, color }) => color && `color ${theme.color[color]};`}
  font-family: "Open Sans", sans-serif;
`;
