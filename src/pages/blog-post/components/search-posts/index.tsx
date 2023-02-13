import { Button } from "@ui/button";
import { Input, InputWrapper } from "@ui/input";
import { FormEvent, useRef } from "react";

type SearchBarProps = {
  handleSearch: (newTag: string) => void;
};

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current) {
      handleSearch(ref.current.value);
    }
  };

  return (
    <InputWrapper onSubmit={handleSumbit} size="l" background="blue3">
      <Input placeholder="Search" ref={ref} />
      <Button size="m" type="submit">
        Search
      </Button>
    </InputWrapper>
  );
};
