import { controlIcons } from "@assets/control-icons";
import { Button as UIButton } from "@ui/button";
import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.card3};
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing.block.width.xs};
  height: ${({ theme }) => theme.spacing.block.height.xl};
  border-radius: ${({ theme }) => theme.spacing.card.borderRadius.xs};
  padding: ${({ theme }) => `${theme.spacing.card.padding.xl} ${theme.spacing.card.padding.m}`};
`;

export const Title = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const Price = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const Button = styled(UIButton)`
  color: white;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.l};
`;

type SwitchButtonProps = {
  pressed: boolean;
};

export const SwitchButton = styled.button<SwitchButtonProps>`
  display: block;
  padding: 4px 0;
  width: 41px;
  border-radius: 6px;
  color: ${({ theme, pressed }) => (!pressed ? theme.color.primary : theme.color.white)};
  background-color: ${({ theme, pressed }) => (pressed ? theme.color.primary : theme.color.white)};
  border: 1px solid ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.xs};
`;

export const BenefitsWrapper = styled.ul`
  list-style: none;
`;

export const Benefit = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xm};
  font-family: "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    mask: url(${controlIcons.CheckMark});
    background-color: ${({ theme }) => theme.color.primary};

    mask-size: 100%;
    width: 30px;
    height: 30px;
    margin-right: 7px;
  }
`;
