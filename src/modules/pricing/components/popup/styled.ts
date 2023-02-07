import { controlIcons } from "@assets/control-icons";
import styled from "styled-components";

export const Price = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  font-family: "Manrope", sans-serif;
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xm};
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #808080a6;
  z-index: 100;
`;

export const Block = styled.div`
  width: 360px;
  height: 600px;
  background-color: white;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Benefit = styled.div`
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

export const Title = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h6};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h6};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: "Manrope", sans-serif;
  margin-bottom: ${({ theme }) => theme.spacing.betweenItems.xl};
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
