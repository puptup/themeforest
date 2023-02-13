/* eslint-disable @typescript-eslint/no-shadow */
import { controlIcons } from "@assets/control-icons";
import { DropdownListMobile } from "@components/dropdown-list-mobile";
import { mobileHeaderLinks } from "@constants/links";
import { Link } from "@ui/arrow-link";
import { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Icon = styled.img`
  cursor: pointer;
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  width: 100%;
  z-index: 2;
  top: ${({ theme }) => theme.spacing.betweenSections.m};
  left: 0;
  padding: 0 16px;
`;

export const Links = styled.ul`
  list-style: none;
`;

export const BurgerMenu = () => {
  const [showPopup, setShowPopup] = useState(false);

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
            <DropdownListMobile title={title} textColor="black" lineColor="grey">
              {values.map(({ path, title }) => (
                <Link to={path} color="black" onClick={handleShowPopup(false)}>
                  {title}
                </Link>
              ))}
            </DropdownListMobile>
          ))}
        </BurgerWrapper>
      )}
    </>
  );
};
