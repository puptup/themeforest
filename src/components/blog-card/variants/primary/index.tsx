import { Language } from "@localization";
import { BlogCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Block, Date, Image, Text, Title, Wrapper } from "./styled";

type PrimaryVariantProps = {
  card: BlogCardType;
  lang: Language;
  handleLinkClick: (id: string) => () => void;
};

export const PrimaryVariant = ({ card, lang, handleLinkClick }: PrimaryVariantProps) => {
  const { id, image, date, title, text } = card;

  return (
    <Wrapper>
      <Image src={image} />
      <Block>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link onClick={handleLinkClick(id)}>{lang !== "ru" ? "Read more" : "Читать далее"}</Link>
      </Block>
    </Wrapper>
  );
};
