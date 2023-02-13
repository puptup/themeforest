import { ArticleBlockType } from "@types";

import { Description, Img, List, ListElement, Title } from "./styled";

type ArticleGeneratorProps = {
  article: ArticleBlockType;
};

export const ArticleGenerator = ({ article }: ArticleGeneratorProps) => {
  const { title, description, image, list } = article;

  return (
    <>
      <Title id={title}>{title}</Title>
      {image && <Img src={image} />}
      {!Array.isArray(description) ? (
        <Description>{description}</Description>
      ) : (
        <>
          {description.map((item, index) => (
            <Description key={index}>{item}</Description>
          ))}
        </>
      )}
      {list && (
        <List>
          {list.map((item, index) => {
            const dividedItem = item.split("—");
            return (
              <ListElement key={index}>
                <span style={{ color: "black" }}>{dividedItem[0]} — </span>
                {dividedItem[1]}
              </ListElement>
            );
          })}
        </List>
      )}
    </>
  );
};
