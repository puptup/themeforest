import { InputWithButton } from "@components/input-with-button";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import React from "react";

import { Block, Container, SectionWrapper } from "./styled";

export const SubscribeSection = () => {
  return (
    <SectionWrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Heading fontWeight="extraBold" level="h2" color="white">
              Subscribe to our newsletter
            </Heading>
            <Paragraph fontWeight="regular" level="p1" color="white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </Paragraph>
          </Block>
          <InputWithButton
            btnColor="white"
            bgColor="blue3"
            placeholder="Your email"
            inputTextColor="black"
            btnText="Send"
          />
        </Container>
      </MainWrapper>
    </SectionWrapper>
  );
};
