import Img from "@assets/img_7.png";
import { postIcons } from "@assets/post-icons";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";
import { getBlogPost } from "@utils/getBlogPost";
import { useMemo } from "react";

import { Icon, Image, Info, InfoWrapper, Quote, Tag, Text, TextWrapper, Title } from "./styled";

type PostProps = {
  post: BlogCardType;
};

type ArticleGeneratorProps = {
  block: {
    type: "text" | "quote";
    value: string;
  };
};

const ArticleGenerator = ({ block }: ArticleGeneratorProps) => {
  const { type, value } = block;
  switch (type) {
    case "text": {
      const splittedText = value.split("\n");
      return (
        <>
          {splittedText.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
        </>
      );
    }

    case "quote": {
      return <Quote>{value}</Quote>;
    }

    default:
      return null;
  }
};

export const Post = ({ post }: PostProps) => {
  const { date, author, views, tags, title } = post;

  const { t, language } = useLocalization();

  const postBody = useMemo(() => getBlogPost(language), [language]);

  return (
    <div>
      <Image src={Img} />
      <InfoWrapper>
        <Info>
          <Icon src={postIcons.calendar} /> {date}
        </Info>
        <Info>
          <Icon src={postIcons.person} /> {author}
        </Info>
      </InfoWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        {postBody.map((block, index) => (
          <ArticleGenerator block={block} key={language + index} />
        ))}
      </TextWrapper>
      <InfoWrapper>
        <Info>
          <Icon src={postIcons.dataLine} /> {views} {t("blogPost.views")}
        </Info>
        <Info>
          <Icon src={postIcons.tag} /> {t("blogPost.tags")}:
          {tags.map((el, index) => (
            <Tag key={index}>{el}</Tag>
          ))}
        </Info>
      </InfoWrapper>
    </div>
  );
};
