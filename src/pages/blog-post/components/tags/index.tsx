import { tags } from "@constants/tags";
import { useLocalization } from "@hooks/useLocalization";

import { TagButton, TagContainer, Title } from "./styled";

type TagsProps = {
  activeTags: string[];
  handleTag: (newTag: string) => () => void;
};

export const Tags = ({ activeTags, handleTag }: TagsProps) => {
  const { t, language } = useLocalization();

  return (
    <div>
      <Title>{t("blogPost.tags")}</Title>
      <TagContainer>
        {tags[language].map((el, index) => (
          <TagButton key={index} active={activeTags.includes(el)} onClick={handleTag(el)}>
            {el}
          </TagButton>
        ))}
      </TagContainer>
    </div>
  );
};
