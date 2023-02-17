/* eslint-disable @typescript-eslint/no-shadow */
import { controlIcons } from "@assets/control-icons";
import { mobileHeaderLinks } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { DropdownListMobile } from "@pages/template/components/dropdown-list-mobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "tmfcomponents";

import { BurgerWrapper, Icon, Wrapper } from "./styled";

export const BurgerMenu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useLocalization();
  const navigate = useNavigate();

  const handleShowPopup = (state: boolean) => () => {
    setShowPopup(state);
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleNavigate = (path: string) => () => {
    handleShowPopup(false)();
    navigate(path);
  };

  return (
    <>
      <Wrapper>
        {!showPopup ? (
          <Icon src={controlIcons.Burger} onClick={handleShowPopup(true)} />
        ) : (
          <Icon src={controlIcons.Dismiss} onClick={handleShowPopup(false)} />
        )}
      </Wrapper>
      {showPopup && (
        <BurgerWrapper>
          {mobileHeaderLinks.map(({ title, values }) => (
            <DropdownListMobile title={t(title)} textColor="black" lineColor="grey">
              {values.map(({ path, title }) => (
                <Link color="black" onClick={handleNavigate(path)}>
                  {t(title)}
                </Link>
              ))}
            </DropdownListMobile>
          ))}
        </BurgerWrapper>
      )}
    </>
  );
};
