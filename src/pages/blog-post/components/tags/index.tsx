import { tags } from "@constants/tags";
import { Language } from "@localization";
import { useTranslation } from "react-i18next";

import { TagButton, TagContainer, Title } from "./styled";

type TagsProps = {
  activeTag: string;
  handleTag: (newTag: string) => () => void;
};

export const Tags = ({ activeTag, handleTag }: TagsProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;
  return (
    <div>
      <Title>{t("blogPost.tags")}</Title>
      <TagContainer>
        {tags[lang].map((el, index) => (
          <TagButton key={index} active={activeTag === el} onClick={handleTag(el)}>
            {el}
          </TagButton>
        ))}
      </TagContainer>
    </div>
  );
};
