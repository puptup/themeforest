import { controlIcons } from "@assets/control-icons";
import React, { useState } from "react";

import { DropdownWrapper, Icon, ListWrapper, Title, TitleIconWrapper, Wrapper } from "./styled";

type ListProps = {
  title: string;
  children: JSX.Element[];
};

export const List = ({ title, children }: ListProps) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleActive = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <TitleIconWrapper>
          <Title>{title}</Title>
          <Icon src={controlIcons.ChevroneDown} active={showLinks} onClick={toggleActive} />
        </TitleIconWrapper>
        <ListWrapper>{children}</ListWrapper>
        {showLinks && <DropdownWrapper>{children}</DropdownWrapper>}
      </Wrapper>
    </>
  );
};
