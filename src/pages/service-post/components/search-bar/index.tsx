import { Links } from "@constants/links";
import { serviceCards } from "@constants/serviceCards";
import { useLocalization } from "@hooks/useLocalization";
import { Language } from "@localization";
import { ServiceCardType } from "@types";
import { Button } from "@ui/button";
import { Input, InputWrapper } from "@ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ItemWrapper, SearchedCardsWrapper, Wrapper } from "./styled";

const findTitles = (string: string, lng: Language) =>
  serviceCards[lng].filter((item) => item.title.toLowerCase().includes(string.toLowerCase()));

const tPath = "servicePost.searchBar.";

export const SearchBar = () => {
  const navigate = useNavigate();
  const { t, language } = useLocalization();

  const [state, setState] = useState("");
  const [cards, setCards] = useState<ServiceCardType[]>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    if (e.target.value.length) {
      setCards(findTitles(e.target.value, language));
    } else {
      setCards(undefined);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleNavigate = (to: string) => () => {
    setCards(undefined);
    navigate(`${Links.services}/${to}`);
  };

  return (
    <Wrapper>
      <InputWrapper onSubmit={handleSubmit} size="l" background="blue3">
        <Input placeholder={t(`${tPath}search`) as string} value={state} onChange={handleChange} />
        <Button size="m" type="submit">
          {t(`${tPath}search`)}
        </Button>
      </InputWrapper>

      {cards && (
        <SearchedCardsWrapper>
          {cards.length > 0 ? (
            cards.map(({ title, id }) => (
              <ItemWrapper onClick={handleNavigate(id)} key={title}>
                {title}
              </ItemWrapper>
            ))
          ) : (
            <div>{t(`${tPath}nofingFound`)}</div>
          )}
        </SearchedCardsWrapper>
      )}
    </Wrapper>
  );
};
