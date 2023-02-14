import * as yup from "yup";

const ContactUsSchemaValidationEn = yup.object().shape({
  name: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Name is required!"),
  theme: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Theme is required!"),
  email: yup.string().email("Invalid email!").required("Email is required!"),
  message: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Message is required!"),
});

const ContactUsSchemaValidationRu = yup.object().shape({
  name: yup
    .string()
    .min(2, "Слишком коротко!")
    .max(70, "Слишком много!")
    .required("Имя обязательно!"),
  theme: yup
    .string()
    .min(2, "Слишком коротко")
    .max(70, "Слишком много!")
    .required("Тема обязательна!"),
  email: yup.string().email("Неправильная почта!").required("Почта обязательна!"),
  message: yup
    .string()
    .min(2, "Слишком коротко")
    .max(70, "Слишком много!")
    .required("Сообщение обязательно!"),
});

export const ContactUsSchemaValidation = {
  en: ContactUsSchemaValidationEn,
  ru: ContactUsSchemaValidationRu,
};
