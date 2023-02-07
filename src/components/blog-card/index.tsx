import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Block, Date, Image, Text, Title, Wrapper } from "./styled";

type BlogCardProps = {
  card: BlogCardType;
  variant?: "small" | "without-description";
};

export const BlogCard = ({ card, variant }: BlogCardProps) => {
  const { image, date, title, text, link } = card;
  return (
    <Wrapper variant={variant}>
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
