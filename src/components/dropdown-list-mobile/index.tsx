import { Chevrone } from "@assets/control-icons";
import { useMobile } from "@hooks/useMobile";
import { Colors } from "@theme/fields/color";
import { useEffect, useState } from "react";

import {
  DropdownWrapper,
  IconWrapper,
  ListWrapper,
  Title,
  TitleIconWrapper,
  Wrapper,
} from "./styled";

type ListProps = {
  title: string;
  children: JSX.Element[] | JSX.Element;
  textColor?: Colors;
  lineColor?: Colors;
};

export const DropdownListMobile = ({
  title,
  children,
  textColor = "white",
  lineColor = "blue3",
}: ListProps) => {
  const [showItems, setShowItems] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    if (!isMobile) {
      setShowItems(false);
    }
  }, [isMobile]);

  const toggleActive = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <Wrapper textColor={textColor} lineColor={lineColor}>
      <TitleIconWrapper onClick={isMobile ? toggleActive : undefined}>
        <Title>{title}</Title>
        {isMobile && (
          <IconWrapper active={showItems}>
            <Chevrone fill={textColor} />
          </IconWrapper>
        )}
      </TitleIconWrapper>
      <ListWrapper>{children}</ListWrapper>
      {showItems && <DropdownWrapper>{children}</DropdownWrapper>}
    </Wrapper>
  );
};
