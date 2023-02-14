/* eslint-disable @typescript-eslint/no-shadow */
import { controlIcons } from "@assets/control-icons";
import { DropdownListMobile } from "@components/dropdown-list-mobile";
import { mobileHeaderLinks } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { Link } from "@ui/arrow-link";
import { useState } from "react";

import { BurgerWrapper, Icon, Wrapper } from "./styled";

export const BurgerMenu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useLocalization();

  const handleShowPopup = (state: boolean) => () => {
    setShowPopup(state);
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
                <Link to={path} color="black" onClick={handleShowPopup(false)}>
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
