import { BlockWidthType, SizeBetweenItems } from "@theme/fields/spacing";
import styled from "styled-components";

type BlockProps = {
  size: BlockWidthType;
  gap?: SizeBetweenItems;
  row?: boolean;
};

export const Block = styled.div<BlockProps>`
  width: ${({ theme, size }) => theme.spacing.block.width[size]};
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  ${({ theme, gap }) =>
    gap &&
    `
    gap: ${theme.spacing.betweenItems[gap]};
  `}
`;
