import { constolIcons } from "@assets/control-icons";
import styled from "styled-components";

type ControlDirectionButtonProps = {
  size: "l" | "s";
  direction: "left" | "right";
};

export const ControlDirectionButton = styled.button<ControlDirectionButtonProps>`
  display: flex;
  justify-content: center;
  width: ${({ theme, size }) => theme.spacing.button.controlButtonWidth[size]};
  padding: ${({ theme, size }) => theme.spacing.button.controlButtonPadding[size]} 0;
  background-color: ${({ theme }) => theme.color.tertiary};
  border: 0;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  transition: all 0.2s linear;

  &:after {
    content: "";
    mask: url(${constolIcons.LeftArrow});
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
`;
