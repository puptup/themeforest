import { BlogCardType } from "@types";
import React from "react";

import { Block, Date, Image, Link, Text, Title, Wrapper } from "./styled";

type BlogCardProps = {
  card: BlogCardType;
};

export const BlogCard = ({ card }: BlogCardProps) => {
  const { image, date, title, text, link } = card;
  return (
    <Wrapper>
      <Image src={image} />
      <Block>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link to={link}>Read more</Link>
      </Block>
    </Wrapper>
  );
};
