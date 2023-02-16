import { mainLinks } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { useState } from "react";
import { createPortal } from "react-dom";

import { Popup } from "../popup";
import { Button, ButtonWrapper, Container, NavLink, Text } from "./styled";

export const Menu = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLocalization();

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
              <Text>{t(title)}</Text>
            </NavLink>
          );
        })}
      </Container>
      <Button size="l" onClick={handlePopup(true)}>
        <ButtonWrapper>
          <i className="material-icons">play_circle</i>
          <Text>{t("header.watchDemo")}</Text>
        </ButtonWrapper>
      </Button>
      {showVideo && createPortal(<Popup close={handlePopup(false)} />, document.body)}
    </>
  );
};
