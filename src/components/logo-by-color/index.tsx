import BlueLogo from "@assets/logo_blue.png";
import WhiteLogo from "@assets/logo_white.png";
import { Logo } from "@ui/logo";
import React from "react";

const logoByColor = {
  blue: BlueLogo,
  white: WhiteLogo,
};

type LogoByColorProps = {
  color: keyof typeof logoByColor;
};

export const LogoByColor = ({ color }: LogoByColorProps) => {
  const choosedLogo = logoByColor[color];
  return <Logo src={choosedLogo} />;
};
