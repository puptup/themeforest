import * as yup from "yup";

export const ContactUsSchemaValidation = yup.object().shape({
  name: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Name is required!"),
  theme: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Theme is required!"),
  email: yup.string().email("Invalid email!").required("Email is required!"),
  message: yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Message is required!"),
});
