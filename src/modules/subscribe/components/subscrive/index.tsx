import { InputWithButton } from "@components/input-with-button";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";

import { Block, Container, Description, SectionWrapper, Title } from "./styled";

export const SubscribeSection = () => {
  return (
    <SectionWrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>Subscribe to our newsletter</Title>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </Description>
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
