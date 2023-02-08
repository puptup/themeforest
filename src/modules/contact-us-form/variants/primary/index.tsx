import { Error } from "@modules/contact-us-form/components";
import { Button } from "@ui/button";

import { Form, Input, InputBlock, InputDescription, InputsWrapper, Title } from "./styled";

export const PrimaryForm = () => {
  return (
    <Form>
      <Title>Contact us</Title>
      <InputsWrapper>
        <InputBlock>
          <InputDescription>
            Name <Error name="name" />
          </InputDescription>
          <Input type="text" name="name" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            Email <Error name="email" />
          </InputDescription>
          <Input type="text" name="email" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            Theme <Error name="theme" />
          </InputDescription>
          <Input type="text" name="theme" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            Message <Error name="message" />
          </InputDescription>
          <Input type="text" name="message" autoComplete="off" />
        </InputBlock>
      </InputsWrapper>
      <Button style={{ alignSelf: "flex-end" }} size="xl" type="submit">
        Submit
      </Button>
    </Form>
  );
};
