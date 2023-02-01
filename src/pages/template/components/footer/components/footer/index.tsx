import { LogoByColor } from "@components/logo-by-color";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";

import { contactInfo, icons, infoBlocks } from "../../constants";
import { ListWithTitle } from "../list-with-title";
import { ListWithTitleAndLinks } from "../list-with-title-and-links";
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
  LogoAndIconsWrapper,
  Text,
} from "./styled";

export const Footer = () => {
  return (
    <FooterWraper>
      <MainWrapper>
        <Container>
          <LogoAndIconsWrapper>
            <LogoByColor color="blue" />
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
            {infoBlocks.map((block) => (
              <ListWithTitleAndLinks key={block.title} title={block.title} items={block.items} />
            ))}
            <ListWithTitle title="Contact Info" items={contactInfo} />
          </InfoBlocksWrapper>
        </Container>
        <Line />
        <CopyRightContainer>
          <CopyRightText>Ensome© 2022 All Rights Reserved</CopyRightText>
          <CopyRigthBlock>
            <CopyRightText>Privacy policy</CopyRightText>
            <CopyRightText>Terms of us</CopyRightText>
          </CopyRigthBlock>
        </CopyRightContainer>
      </MainWrapper>
    </FooterWraper>
  );
};
