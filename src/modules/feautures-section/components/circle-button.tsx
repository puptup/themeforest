import React from "react";

import { FirstCircle, SecondCircle, ThirdCircle } from "../styled";

type CircleButtonProps = {
  children: React.ReactElement;
  handleRoute: () => void;
};

export const CircleButton = ({ children, handleRoute }: CircleButtonProps) => {
  return (
    <FirstCircle onClick={handleRoute}>
      <SecondCircle>
        <ThirdCircle>{children}</ThirdCircle>
      </SecondCircle>
    </FirstCircle>
  );
};
