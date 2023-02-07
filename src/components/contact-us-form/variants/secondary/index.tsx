import { Error } from "@components/contact-us-form/components";
import { Button } from "@ui/button";

import { Form, Input, InputBlock, InputsWrapper, TwoInputs } from "./styled";

export const SecondaryForm = () => {
  return (
    <Form>
      <InputsWrapper>
        <TwoInputs>
          <InputBlock>
            <Input type="text" name="name" autoComplete="off" placeholder="Your name" />
            <Error name="name" />
          </InputBlock>
          <InputBlock>
            <Input type="text" name="email" autoComplete="off" placeholder="Your email" />
            <Error name="email" />
          </InputBlock>
        </TwoInputs>
        <InputBlock>
          <Input type="text" name="theme" autoComplete="off" placeholder="Theme" />
          <Error name="theme" />
        </InputBlock>
        <InputBlock>
          <Input type="text" name="message" autoComplete="off" placeholder="Your message" />
          <Error name="message" />
        </InputBlock>
      </InputsWrapper>
      <Button style={{ alignSelf: "flex-end" }} size="xl" type="submit">
        Send
      </Button>
    </Form>
  );
};
