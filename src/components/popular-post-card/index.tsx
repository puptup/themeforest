import { Links } from "@constants/links";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Date, Image, InfoWrapper, Title, Wrapper } from "./styled";

type RelatedPostProps = {
  post: BlogCardType;
};

export const PopularPost = ({ post }: RelatedPostProps) => {
  const { date, image, title, id } = post;
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Link to={`${Links.blog}/${id}`}>Read more</Link>
      </InfoWrapper>
    </Wrapper>
  );
};
