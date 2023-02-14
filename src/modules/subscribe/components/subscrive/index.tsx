/* eslint-disable import/no-extraneous-dependencies */
import emailjs from "@emailjs/browser";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { Button } from "@ui/button";
import { Input, InputWrapper } from "@ui/input";
import { MainWrapper } from "@ui/main-wrapper";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

import { Block, Container, Description, SectionWrapper, Title } from "./styled";

const tPath = "subscribeSection.";

export const SubscribeSection = () => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const isMobile = useMobile();
  const { t } = useLocalization();

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
            <Title>{t(`${tPath}title`)}</Title>
            <Description>{t(`${tPath}description`)}</Description>
          </Block>
          <InputWrapper color="black" size="l" background="blue3" ref={ref}>
            <Input
              placeholder={t(`${tPath}placeholder`) as string}
              value={inputValue}
              onChange={handleChange}
              type="email"
              name="user_email"
            />
            {!isMobile && (
              <Button onClick={handleSubmitButton} size="m" color="white" textColor="black">
                {t(`${tPath}send`)}
              </Button>
            )}
          </InputWrapper>
          {isMobile && (
            <Button size="xl" color="white" fullsize textColor="black" onClick={handleSubmitButton}>
              {t(`${tPath}send`)}
            </Button>
          )}
        </Container>
      </MainWrapper>
    </SectionWrapper>
  );
};
