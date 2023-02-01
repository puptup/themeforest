import { Button } from "@ui/button";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";

import { ContactUsWrapper, Container, Description, Title, Wrapper } from "./styled";

export const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <MainWrapper>
        <Container>
          <Wrapper>
            <Title>Do you need help?</Title>
            <Description>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Description>
            <Button size="xl">Contact us</Button>
          </Wrapper>
        </Container>
      </MainWrapper>
    </ContactUsWrapper>
  );
};
