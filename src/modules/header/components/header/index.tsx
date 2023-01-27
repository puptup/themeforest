import { LogoByColor } from "@components/logo-by-color";
import { Button } from "@ui/button";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";

import { Menu } from "../menu";
import { ButtonWrapper, HeaderContainer, HeaderWrapper } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <MainWrapper>
        <HeaderWrapper>
          <LogoByColor color="blue" />
          <Menu />
          <Button size="l">
            <ButtonWrapper>
              <i className="material-icons">play_circle</i>
              <Heading fontWeight="semiBold" level="h7" color="white">
                Watch the demo
              </Heading>
            </ButtonWrapper>
          </Button>
        </HeaderWrapper>
      </MainWrapper>
    </HeaderContainer>
  );
};
