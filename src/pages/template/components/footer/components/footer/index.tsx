import { companyesIcons } from "@assets/footer-icons";
import { logos } from "@assets/logo";
import { DropdownListMobile } from "@components/dropdown-list-mobile";
import { contacts } from "@constants/contacts";
import { quickLinks, serviceLinks } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { Logo } from "@ui/logo";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Container,
  CopyRightContainer,
  CopyRightText,
  CopyRigthBlock,
  FooterWraper,
  Icon,
  InfoBlocksWrapper,
  Line,
  Link,
  LinksWrapper,
  LinkText,
  LogoAndIconsWrapper,
  Text,
} from "./styled";

export const Footer = () => {
  const isMobile = useMobile();
  const { t, language, changeLanguageTo } = useLocalization();

  const handleLanguage = () => {
    changeLanguageTo(language === "ru" ? "en" : "ru");
    localStorage.setItem("lang", language === "ru" ? "en" : "ru");
  };

  return (
    <FooterWraper>
      <MainWrapper>
        <Container>
          <LogoAndIconsWrapper>
            <Logo src={logos.WhiteLogo} onClick={handleLanguage} />
            <Text>{t("footer.description")}</Text>
            <LinksWrapper>
              {companyesIcons.map((elem, index) => (
                <Icon key={index} src={elem.icon} />
              ))}
            </LinksWrapper>
          </LogoAndIconsWrapper>
          <InfoBlocksWrapper>
            <DropdownListMobile title={t("footer.quickLinks")}>
              {quickLinks.map(({ path, title }) => (
                <Link key={path} to={path}>
                  {t(title)}
                </Link>
              ))}
            </DropdownListMobile>
            <DropdownListMobile title={t("footer.serviceLinks")}>
              {serviceLinks.map(({ path, title }) => (
                <Link key={path} to={path}>
                  {t(title)}
                </Link>
              ))}
            </DropdownListMobile>
            <DropdownListMobile title={t("footer.contactInfo")}>
              {contacts.map(({ title, path }) => (
                <LinkText key={path} href={path} target="_blank" rel="noreferrer">
                  {t(title)}
                </LinkText>
              ))}
            </DropdownListMobile>
          </InfoBlocksWrapper>
        </Container>
        {!isMobile && <Line />}
        <CopyRightContainer>
          <CopyRightText>{t("footer.rightsReserved")}</CopyRightText>
          {isMobile && <Line />}
          <CopyRigthBlock>
            <CopyRightText>{t("footer.privacyPolicy")}</CopyRightText>
            <CopyRightText>{t("footer.termsOfUs")}</CopyRightText>
          </CopyRigthBlock>
        </CopyRightContainer>
      </MainWrapper>
    </FooterWraper>
  );
};
