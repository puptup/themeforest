import { mainLinks } from "@constants/links";
import { NavLink } from "@ui/nav-link";
import { useState } from "react";
import { createPortal } from "react-dom";

import { Popup } from "../popup";
import { Button, ButtonWrapper, Container, Text } from "./styled";

export const Menu = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePopup = (state: boolean) => () => {
    setShowVideo(state);
  };

  return (
    <>
      <Container>
        {mainLinks.map((element) => {
          const { path, title } = element;
          return (
            <NavLink key={path} to={path} end>
              <Text>{title}</Text>
            </NavLink>
          );
        })}
      </Container>
      <Button size="l" onClick={handlePopup(true)}>
        <ButtonWrapper>
          <i className="material-icons">play_circle</i>
          <Text>Watch the demo</Text>
        </ButtonWrapper>
      </Button>
      {showVideo && createPortal(<Popup close={handlePopup(false)} />, document.body)}
    </>
  );
};
