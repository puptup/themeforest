import { Button } from "@ui/button";
import { Input, InputWrapper } from "@ui/input";
import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";

type SearchBarProps = {
  handleSearch: (newTag: string) => void;
};

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

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
        {t("blogPost.searchButton")}
      </Button>
    </InputWrapper>
  );
};
