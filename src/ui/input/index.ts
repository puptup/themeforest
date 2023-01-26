import { Colors } from "@theme/fields/color";
import { BlockWidthType } from "@theme/fields/spacing";
import styled from "styled-components";

export const Input = styled.input`
  padding-left: 25px;
  flex: 1;
  border: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

type InputWrapperProps = {
  color: Colors;
  background: Colors;
  size: BlockWidthType;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  color: ${({ theme, color }) => theme.color[color]};
  width: ${({ theme, size }) => theme.spacing.block.width[size]};
  display: flex;
  border: 0;
  background-color: ${({ theme, background }) => theme.color[background]};
  border-radius: 6px;
`;
