import { useLocalization } from "@hooks/useLocalization";
import { CountactUsFormValues } from "@types";
import { ContactUsSchemaValidation } from "@utils/validations";
import { Formik } from "formik";

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
  const { language } = useLocalization();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitMassage}
      validationSchema={ContactUsSchemaValidation[language]}
    >
      {() => <Form />}
    </Formik>
  );
};
