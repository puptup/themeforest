import { TagButton, TagContainer, Title } from "./styled";

const tags = [
  "All topics",
  "Data",
  "Future",
  "App",
  "Management",
  "CMR",
  "Big data",
  "Media",
  "CIO",
  "Startup",
  "Team",
];

type TagsProps = {
  activeTag: string;
  handleTag: (newTag: string) => () => void;
};

export const Tags = ({ activeTag, handleTag }: TagsProps) => {
  return (
    <div>
      <Title>Tags</Title>
      <TagContainer>
        {tags.map((el, index) => (
          <TagButton key={index} active={activeTag === el} onClick={handleTag(el)}>
            {el}
          </TagButton>
        ))}
      </TagContainer>
    </div>
  );
};
