import { Colors } from "@theme/fields/color";
import styled from "styled-components";

type TextWithColorProps = {
  color: Colors;
};

export const TextWithColor = styled.span<TextWithColorProps>`
  color: ${({ theme, color }) => theme.color[color]};
`;
