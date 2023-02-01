import { controlIcons } from "@assets/control-icons";
import { device } from "@constants/devices";
import styled from "styled-components";

type ControlDirectionButtonProps = {
  direction: "left" | "right";
};

export const ControlDirectionButton = styled.button<ControlDirectionButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing.button.controlButtonWidth.l};
  padding: ${({ theme }) => theme.spacing.button.controlButtonPadding.l} 0;
  background-color: ${({ theme }) => theme.color.tertiary};
  border: 0;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  transition: all 0.2s linear;

  &:after {
    content: "";
    mask: url(${controlIcons.LeftArrow});
    background-color: ${({ theme }) => theme.color.black};
    mask-size: 100%;
    transform: rotate(${({ direction }) => (direction === "left" ? "0" : "180deg")});
    width: 30px;
    height: 30px;
  }

  &:hover:enabled {
    background-color: ${({ theme }) => theme.color.blue3};
    &:active {
      background-color: ${({ theme }) => theme.color.tertiary};
    }
  }

  &:disabled {
    cursor: default;
    &::after {
      background-color: ${({ theme }) => theme.color.grey};
    }
  }

  @media ${device.laptop} {
    width: ${({ theme }) => theme.spacing.button.controlButtonWidth.s};
    padding: ${({ theme }) => theme.spacing.button.controlButtonPadding.s} 0;

    &:after {
      width: 24px;
      height: 24px;
    }
  }
`;
