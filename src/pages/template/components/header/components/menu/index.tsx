import { mainLinks } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "tmfcomponents";

import { Popup } from "../popup";
import { ButtonWrapper, Container, LangButton, NavLink, Text } from "./styled";

export const Menu = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t, language, changeLanguageTo } = useLocalization();

  const handlePopup = (state: boolean) => () => {
    setShowVideo(state);
  };

  const handleLanguage = () => {
    changeLanguageTo(language === "ru" ? "en" : "ru");
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

      <ButtonWrapper>
        <Button size="l" onClick={handlePopup(true)}>
          <ButtonWrapper>
            <i className="material-icons">play_circle</i>
            <Text>{t("header.watchDemo")}</Text>
          </ButtonWrapper>
        </Button>
        <LangButton size="l" color="white" textColor="black" onClick={handleLanguage}>
          {language.toUpperCase()}
        </LangButton>
      </ButtonWrapper>
      {showVideo && createPortal(<Popup close={handlePopup(false)} />, document.body)}
    </>
  );
};
