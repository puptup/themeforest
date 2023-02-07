import { logos } from "@assets/logo";
import { useMobile } from "@hooks/useMobile";
import { Link } from "@ui/link";
import { Logo } from "@ui/logo";
import { MainWrapper } from "@ui/main-wrapper";

import { contactInfo, icons, infoBlocks } from "../../constants";
import { List } from "../list";
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
              {icons.map((elem, index) => (
                <Icon key={index} src={elem.icon} />
              ))}
            </LinksWrapper>
          </LogoAndIconsWrapper>
          <InfoBlocksWrapper>
            {infoBlocks.map((block) => {
              const { title, items } = block;
              return (
                <List key={title} title={title}>
                  {items.map((item) => (
                    <Link key={title + item.path} to={item.path}>
                      {item.title}
                    </Link>
                  ))}
                </List>
              );
            })}
            <List title="Contact Info">
              {contactInfo.map((item, index) => (
                <LinkText key={index}>{item}</LinkText>
              ))}
            </List>
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
