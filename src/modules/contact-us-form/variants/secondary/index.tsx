import { useLocalization } from "@hooks/useLocalization";
import { Error } from "@modules/contact-us-form/components";

import { Button, Form, Input, InputBlock, InputsWrapper, TwoInputs } from "./styled";

const tPath = "contactUsForm.placeHolder.";

export const SecondaryForm = () => {
  const { t } = useLocalization();

  return (
    <Form>
      <InputsWrapper>
        <TwoInputs>
          <InputBlock>
            <Input type="text" name="name" autoComplete="off" placeholder={t(`${tPath}name`)} />
            <Error name="name" />
          </InputBlock>
          <InputBlock>
            <Input type="text" name="email" autoComplete="off" placeholder={t(`${tPath}email`)} />
            <Error name="email" />
          </InputBlock>
        </TwoInputs>
        <InputBlock>
          <Input type="text" name="theme" autoComplete="off" placeholder={t(`${tPath}theme`)} />
          <Error name="theme" />
        </InputBlock>
        <InputBlock>
          <Input type="text" name="message" autoComplete="off" placeholder={t(`${tPath}message`)} />
          <Error name="message" />
        </InputBlock>
      </InputsWrapper>
      <Button size="xl" type="submit">
        {t("contactUsForm.send")}
      </Button>
    </Form>
  );
};
