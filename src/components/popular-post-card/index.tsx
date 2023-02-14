import { Links } from "@constants/links";
import { Language } from "@localization";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Date, Image, InfoWrapper, Title, Wrapper } from "./styled";

type RelatedPostProps = {
  post: BlogCardType;
  lng: Language;
};

export const PopularPost = ({ post, lng }: RelatedPostProps) => {
  const { date, image, title, id } = post;
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Link to={`${Links.blog}/${id}`}>{lng !== "ru" ? "Read more" : "Читать далее"}</Link>
      </InfoWrapper>
    </Wrapper>
  );
};
