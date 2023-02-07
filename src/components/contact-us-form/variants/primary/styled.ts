import { Field, Form as FormikForm } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
  background-color: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => theme.spacing.block.width.l};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const InputBlock = styled.div`
  border-bottom: 1px solid black;
`;

export const InputDescription = styled.h6`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h8};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h8};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.grey};
`;

export const Input = styled(Field)`
  padding-left: 10px;
  min-height: 30px;
  width: 100%;
  border: 0;
  outline: 0;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;
