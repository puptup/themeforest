import { useLocalization } from "@hooks/useLocalization";
import { FormEvent, useRef } from "react";
import { Button, Input, InputWrapper } from "tmfcomponents";

type SearchBarProps = {
  handleSearch: (newTag: string) => void;
};

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { t } = useLocalization();

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
