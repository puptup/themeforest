import { tags } from "@constants/tags";
import { useLocalization } from "@hooks/useLocalization";

import { TagButton, TagContainer, Title } from "./styled";

type TagsProps = {
  activeTag: string;
  handleTag: (newTag: string) => () => void;
};

export const Tags = ({ activeTag, handleTag }: TagsProps) => {
  const { t, language } = useLocalization();

  return (
    <div>
      <Title>{t("blogPost.tags")}</Title>
      <TagContainer>
        {tags[language].map((el, index) => (
          <TagButton key={index} active={activeTag === el} onClick={handleTag(el)}>
            {el}
          </TagButton>
        ))}
      </TagContainer>
    </div>
  );
};
