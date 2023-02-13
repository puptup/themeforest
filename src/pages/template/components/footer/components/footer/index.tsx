import { companyesIcons } from "@assets/footer-icons";
import { logos } from "@assets/logo";
import { DropdownListMobile } from "@components/dropdown-list-mobile";
import { contacts } from "@constants/contacts";
import { quickLinks, serviceLinks } from "@constants/links";
import { useMobile } from "@hooks/useMobile";
import { Link } from "@ui/link";
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
  LinksWrapper,
  LinkText,
  LogoAndIconsWrapper,
  Text,
} from "./styled";

export const Footer = () => {
  const isMobile = useMobile();

  return (
    <FooterWraper>
      <MainWrapper>
        <Container>
          <LogoAndIconsWrapper>
            <Logo src={logos.WhiteLogo} />
            <Text>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Text>
            <LinksWrapper>
              {companyesIcons.map((elem, index) => (
                <Icon key={index} src={elem.icon} />
              ))}
            </LinksWrapper>
          </LogoAndIconsWrapper>
          <InfoBlocksWrapper>
            <DropdownListMobile title="Quick links">
              {quickLinks.map(({ path, title }) => (
                <Link key={path} to={path}>
                  {title}
                </Link>
              ))}
            </DropdownListMobile>
            <DropdownListMobile title="Service links">
              {serviceLinks.map(({ path, title }) => (
                <Link key={path} to={path}>
                  {title}
                </Link>
              ))}
            </DropdownListMobile>
            <DropdownListMobile title="Contact Info">
              {contacts.map(({ title, path }) => (
                <LinkText key={path} href={path} target="_blank" rel="noreferrer">
                  {title}
                </LinkText>
              ))}
            </DropdownListMobile>
          </InfoBlocksWrapper>
        </Container>
        {!isMobile && <Line />}
        <CopyRightContainer>
          <CopyRightText>Ensome© 2022 All Rights Reserved</CopyRightText>
          {isMobile && <Line />}
          <CopyRigthBlock>
            <CopyRightText>Privacy policy</CopyRightText>
            <CopyRightText>Terms of us</CopyRightText>
          </CopyRigthBlock>
        </CopyRightContainer>
      </MainWrapper>
    </FooterWraper>
  );
};
