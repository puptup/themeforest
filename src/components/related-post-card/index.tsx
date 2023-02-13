import { Links } from "@constants/links";
import { BlogCardType } from "@types";
import { useNavigate } from "react-router-dom";

import { Date, Image, InfoWrapper, Text, Title, Wrapper } from "./styled";

type RelatedPostProps = {
  post: BlogCardType;
};

export const RelatedPost = ({ post }: RelatedPostProps) => {
  const { date, image, title, text, id } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${Links.blog}/${id}`);
  };

  return (
    <Wrapper onClick={handleNavigate}>
      <Image src={image} />
      <InfoWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </InfoWrapper>
    </Wrapper>
  );
};
