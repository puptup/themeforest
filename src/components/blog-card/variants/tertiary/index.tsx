import { Links } from "@constants/links";
import { Language } from "@localization";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Date, Image, InfoWrapper, Title, Wrapper } from "./styled";

type TertiaryVariantProps = {
  card: BlogCardType;
  lang: Language;
};

export const TertiaryVariant = ({ card, lang }: TertiaryVariantProps) => {
  const { date, image, title, id } = card;
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Link to={`${Links.blog}/${id}`}>{lang !== "ru" ? "Read more" : "Читать далее"}</Link>
      </InfoWrapper>
    </Wrapper>
  );
};
