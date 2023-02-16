import { Links } from "@constants/links";
import { Language } from "@localization";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";
import { useNavigate } from "react-router-dom";

import { Date, Image, InfoWrapper, Text, Title, Wrapper } from "./styled";

type SecondaryVariantProps = {
  card: BlogCardType;
  lang: Language;
};

export const SecondaryVariant = ({ card, lang }: SecondaryVariantProps) => {
  const { date, image, title, text, id } = card;

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
        <Link to={`${Links.blog}/${id}`}>{lang !== "ru" ? "Read more" : "Читать далее"}</Link>
      </InfoWrapper>
    </Wrapper>
  );
};
