import { logos } from "@assets/logo";
import { useMobile } from "@hooks/useMobile";
import { Logo } from "@ui/logo";
import { MainWrapper } from "@ui/main-wrapper";
import { useNavigate } from "react-router-dom";

import { BurgerMenu } from "./components/burger-menu";
import { Menu } from "./components/menu";
import { HeaderContainer, HeaderWrapper } from "./styled";

export const Header = () => {
  const isMobile = useMobile();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };
  console.log(isMobile);
  return (
    <>
      <HeaderContainer>
        <MainWrapper>
          <HeaderWrapper>
            <Logo src={logos.BlueLogo} onClick={handleNavigateHome} />
            {!isMobile ? <Menu /> : <BurgerMenu />}
          </HeaderWrapper>
        </MainWrapper>
      </HeaderContainer>
    </>
  );
};
