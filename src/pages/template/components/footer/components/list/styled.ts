import { device } from "@constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spacing.block.width.xs};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};

  @media ${device.laptop} {
    justify-content: space-between;
    max-width: 100%;
    gap: 0;
    border-bottom: 1px solid white;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  @media ${device.laptop} {
    display: none;
    padding-left: ${({ theme }) => theme.spacing.betweenItems.l};
    gap: 0;
  }
`;

export const Title = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
    line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  }
`;

type IconProps = {
  active: boolean;
};

export const Icon = styled.img<IconProps>`
  display: none;
  transform: rotate(${({ active }) => (active ? "180deg" : 0)});
  @media ${device.laptop} {
    display: block;
  }
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.betweenItems.xm} 0;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
  padding-bottom: ${({ theme }) => theme.spacing.betweenItems.s};
  padding-left: ${({ theme }) => theme.spacing.betweenItems.s};
`;
