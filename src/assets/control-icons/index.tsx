/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from "react";

import LeftArrow from "./icon_arrow__left.svg";
import CheckMark from "./icon_checkmark.svg";
import ChevroneDown from "./icon_chevron_down_20.svg";
import Dismiss from "./icon_dismiss.svg";
import Divider from "./icon_divider.svg";
import minus from "./icon_minus.svg";
import Burger from "./icon_navigation.svg";
import plus from "./icon_plus.svg";

export const controlIcons = {
  LeftArrow,
  CheckMark,
  Burger,
  Dismiss,
  ChevroneDown,
  Divider,
  minus,
  plus,
};

export const Chevrone = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 7.175C4.08371 7.0847 4.18439 7.01178 4.29628 6.9604C4.40818 6.90902 4.5291 6.88019 4.65214 6.87554C4.77518 6.8709 4.89793 6.89054 5.01338 6.93334C5.12883 6.97614 5.23472 7.04127 5.325 7.125L10 11.5337L14.675 7.125C14.7653 7.04128 14.8712 6.97616 14.9866 6.93337C15.1021 6.89057 15.2248 6.87094 15.3479 6.87558C15.4709 6.88022 15.5918 6.90905 15.7037 6.96043C15.8156 7.0118 15.9163 7.08471 16 7.175C16.0837 7.26528 16.1488 7.37117 16.1916 7.48662C16.2344 7.60207 16.2541 7.72481 16.2494 7.84785C16.2448 7.97089 16.2159 8.09181 16.1646 8.2037C16.1132 8.3156 16.0403 8.41628 15.95 8.5L10.6375 13.5C10.4641 13.6608 10.2364 13.7501 10 13.7501C9.76356 13.7501 9.53585 13.6608 9.3625 13.5L4.05 8.5C3.9597 8.41628 3.88678 8.31561 3.8354 8.20371C3.78402 8.09181 3.75519 7.97089 3.75054 7.84785C3.7459 7.72481 3.76554 7.60206 3.80834 7.48661C3.85114 7.37116 3.91627 7.26527 4 7.175V7.175Z" />
    </svg>
  );
};
