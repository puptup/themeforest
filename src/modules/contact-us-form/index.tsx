import { Language } from "@localization";
import { CountactUsFormValues } from "@types";
import { ContactUsSchemaValidation } from "@utils/validations";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";

import { formByVariant } from "./variants";

const initialValues: CountactUsFormValues = {
  email: "",
  name: "",
  theme: "",
  message: "",
};

type ContactUsFormProps = {
  variant: "primary" | "secondary";
};

export const submitMassage = (values: CountactUsFormValues) => {
  console.log(values);
};

export const ContactUsForm = ({ variant }: ContactUsFormProps) => {
  const Form = formByVariant[variant];
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitMassage}
      validationSchema={ContactUsSchemaValidation[lang]}
    >
      {() => <Form />}
    </Formik>
  );
};
