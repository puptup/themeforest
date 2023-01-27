import { LogoByColor } from "@components/logo-by-color";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import React from "react";

import { contactInfo, icons, infoBlocks } from "../../constants";
import { ListWithTitle, ListWithTitleAndLinks } from "../list-with-title-and-links";
import {
  Container,
  CopyRightContainer,
  CopyRigthBlock,
  FooterWraper,
  Icon,
  InfoBlocksWrapper,
  Line,
  LinksWrapper,
  LogoAndIconsWrapper,
} from "./styled";

export const Footer = () => {
  return (
    <FooterWraper>
      <MainWrapper>
        <Container>
          <LogoAndIconsWrapper>
            <LogoByColor color="blue" />
            <Paragraph level="p3" fontWeight="regular" color="white">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Paragraph>
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
          <Paragraph level="p3" fontWeight="regular" color="blue2">
            Ensome© 2022 All Rights Reserved
          </Paragraph>
          <CopyRigthBlock>
            <Paragraph level="p3" fontWeight="regular" color="blue2">
              Privacy policy
            </Paragraph>
            <Paragraph level="p3" fontWeight="regular" color="blue2">
              Terms of us
            </Paragraph>
          </CopyRigthBlock>
        </CopyRightContainer>
      </MainWrapper>
    </FooterWraper>
  );
};
