import { controlIcons } from "@assets/control-icons";
import { device } from "@constants/devices";
import React, { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

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
      {showPopup && <BurgerWrapper>123</BurgerWrapper>}
    </>
  );
};
