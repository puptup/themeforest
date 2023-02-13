import { Chevrone } from "@assets/control-icons";
import { Colors } from "@theme/fields/color";
import { useState } from "react";

import { DropdownWrapper, IconWrapper, TitleIconWrapper, Wrapper } from "./styled";

type DropdownListProps = {
  title: JSX.Element;
  children: JSX.Element[] | JSX.Element;
  textColor?: Colors;
  lineColor?: Colors;
};

export const DropdownList = ({
  title,
  children,
  textColor = "white",
  lineColor = "blue3",
}: DropdownListProps) => {
  const [showItems, setShowItems] = useState(false);

  const toggleActive = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <Wrapper textColor={textColor} lineColor={lineColor}>
      <TitleIconWrapper onClick={toggleActive}>
        <>{title}</>
        <IconWrapper active={showItems}>
          <Chevrone fill={textColor} />
        </IconWrapper>
      </TitleIconWrapper>
      {showItems && <DropdownWrapper>{children}</DropdownWrapper>}
    </Wrapper>
  );
};
