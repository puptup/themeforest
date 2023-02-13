import { Links } from "@constants/links";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Block, Date, Image, Text, Title, Wrapper } from "./styled";

type BlogCardProps = {
  card: BlogCardType;
};

export const BlogCard = ({ card }: BlogCardProps) => {
  const { id, image, date, title, text } = card;
  return (
    <Wrapper>
      <Image src={image} />
      <Block>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link to={`${Links.blog}/${id}`}>Read more</Link>
      </Block>
    </Wrapper>
  );
};
