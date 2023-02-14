import { mainLinks } from "@constants/links";
import { NavLink } from "@ui/nav-link";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import { Popup } from "../popup";
import { Button, ButtonWrapper, Container, Text } from "./styled";

export const Menu = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useTranslation();

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
