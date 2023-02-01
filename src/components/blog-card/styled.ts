import { controlIcons } from "@assets/control-icons";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

type BlogCardsVariants = "small" | "without-description";

type WrapperProps = {
  variant?: BlogCardsVariants;
};

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ theme }) => theme.spacing.block.width.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.s};
`;

export const Image = styled.img``;

export const Date = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p3};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Title = styled.h4`
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize.p2};
  line-height: ${({ theme }) => theme.typography.paragraph.lineHeight.p2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    mask: url(${controlIcons.LeftArrow});
    background-color: ${({ theme }) => theme.color.primary};
    transform: rotate(180deg);
    mask-size: 100%;
    width: 30px;
    height: 30px;
    margin-right: 7px;
  }
`;
