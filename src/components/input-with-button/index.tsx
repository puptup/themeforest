import { Colors } from "@theme/fields/color";
import { Button } from "@ui/button";
import { Heading } from "@ui/heading";
import { Input, InputWrapper } from "@ui/input";
import React, { ChangeEvent, useState } from "react";

type InputWithButtonProps = {
  btnColor: Colors;
  bgColor: Colors;
  inputTextColor: Colors;
  placeholder: string;
  btnText: string;
};

export const InputWithButton = ({
  bgColor,
  btnColor,
  inputTextColor,
  placeholder,
  btnText,
}: InputWithButtonProps) => {
  const [state, setState] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <InputWrapper color={inputTextColor} size="l" background={bgColor}>
      <Input placeholder={placeholder} value={state} onChange={handleChange} />
      <Button size="m" color={btnColor}>
        <Heading level="h6" fontWeight="bold">
          {btnText}
        </Heading>
      </Button>
    </InputWrapper>
  );
};
