/* eslint-disable import/no-extraneous-dependencies */
import emailjs from "@emailjs/browser";
import { useMobile } from "@hooks/useMobile";
import { Button } from "@ui/button";
import { Input, InputWrapper } from "@ui/input";
import { MainWrapper } from "@ui/main-wrapper";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

import { Block, Container, Description, SectionWrapper, Title } from "./styled";

export const SubscribeSection = () => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const isMobile = useMobile();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitButton = (e: MouseEvent) => {
    e.preventDefault();
    emailjs.sendForm("service_zmw4vfr", "template_7wt4y3q", ref.current!, "pP1ZMPR5O3xsPFSrB");
  };

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
          <InputWrapper color="black" size="l" background="blue3" ref={ref}>
            <Input
              placeholder="Your email"
              value={inputValue}
              onChange={handleChange}
              type="email"
              name="user_email"
            />
            {!isMobile && (
              <Button onClick={handleSubmitButton} size="m" color="white" textColor="black">
                Send
              </Button>
            )}
          </InputWrapper>
          {isMobile && (
            <Button size="xl" color="white" fullsize textColor="black" onClick={handleSubmitButton}>
              Send
            </Button>
          )}
        </Container>
      </MainWrapper>
    </SectionWrapper>
  );
};
