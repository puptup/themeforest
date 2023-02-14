import { Error } from "@modules/contact-us-form/components";
import { Button } from "@ui/button";
import { useTranslation } from "react-i18next";

import { Form, Input, InputBlock, InputDescription, InputsWrapper, Title } from "./styled";

const tPath = "contactUsForm.description.";

export const PrimaryForm = () => {
  const { t } = useTranslation();

  return (
    <Form>
      <Title>{t("contactUsForm.contactUs")}</Title>
      <InputsWrapper>
        <InputBlock>
          <InputDescription>
            {t(`${tPath}name`)} <Error name="name" />
          </InputDescription>
          <Input type="text" name="name" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            {t(`${tPath}email`)} <Error name="email" />
          </InputDescription>
          <Input type="text" name="email" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            {t(`${tPath}theme`)} <Error name="theme" />
          </InputDescription>
          <Input type="text" name="theme" autoComplete="off" />
        </InputBlock>
        <InputBlock>
          <InputDescription>
            {t(`${tPath}message`)} <Error name="message" />
          </InputDescription>
          <Input type="text" name="message" autoComplete="off" />
        </InputBlock>
      </InputsWrapper>
      <Button style={{ alignSelf: "flex-end" }} size="xl" type="submit">
        {t("contactUsForm.submit")}
      </Button>
    </Form>
  );
};
