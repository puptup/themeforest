import { device } from "@constants/devices";
import { Button as UIButton } from "@ui/button";
import { Field, Form as FormikForm } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
  width: ${({ theme }) => theme.spacing.block.width.xl};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
  padding-top: ${({ theme }) => theme.spacing.betweenItems.m};

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.m};
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media ${device.laptop} {
    width: 100%;
  }
`;
export const TwoInputs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  align-items: flex-start;

  @media ${device.laptop} {
    flex-direction: column-reverse;
  }
`;

export const Input = styled(Field)`
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 6px;
  border: 1px solid black;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h3};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const Button = styled(UIButton)`
  align-self: flex-end;

  @media ${device.laptop} {
    width: 100%;
  }
`;
