import { useIntersectionObserver } from "@hooks/useIsInViewPort";
import { ArticleBlockType } from "@types";
import { useRef } from "react";

import { Description, Img, List, ListElement, Title } from "./styled";

type ArticleGeneratorProps = {
  article: ArticleBlockType;
  handleStep: (item: string, status: boolean) => void;
};

export const ArticleGenerator = ({ article, handleStep }: ArticleGeneratorProps) => {
  const { title, description, image, list } = article;
  const ref = useRef(null);

  const handleTitleJoinInViewPort = (isJoin: boolean) => {
    handleStep(title, isJoin);
  };

  useIntersectionObserver(ref, handleTitleJoinInViewPort);

  return (
    <>
      <Title id={title} ref={ref}>
        {title}
      </Title>
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
