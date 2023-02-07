import { ErrorMessage } from "formik";
import styled from "styled-components";

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.red};
`;

export const Error = ({ name }: { name: string }) => {
  return <ErrorMessage name={name} render={(msg) => <ErrorText>{msg}</ErrorText>} />;
};
