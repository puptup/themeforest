import { logos } from "@assets/logo";
import { Logo } from "@ui/logo";
import { MainWrapper } from "@ui/main-wrapper";
import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { BurgerMenu } from "../burger-menu";
import { Menu } from "../menu";
import { Popup } from "../popup";
import { Button, ButtonWrapper, HeaderContainer, HeaderWrapper, Text } from "./styled";

export const Header = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePopup = useCallback(
    (state: boolean) => () => {
      setShowVideo(state);
    },
    []
  );

  return (
    <>
      <HeaderContainer>
        <MainWrapper>
          <HeaderWrapper>
            <Logo src={logos.BlueLogo} />
            <Menu />
            <BurgerMenu />
            <Button size="l" onClick={handlePopup(true)}>
              <ButtonWrapper>
                <i className="material-icons">play_circle</i>
                <Text>Watch the demo</Text>
              </ButtonWrapper>
            </Button>
          </HeaderWrapper>
        </MainWrapper>
      </HeaderContainer>
      {showVideo && createPortal(<Popup close={handlePopup(false)} />, document.body)}
    </>
  );
};
