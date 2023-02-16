/* eslint-disable react/no-unused-prop-types */
import { Language } from "@localization";
import { BlogCardType } from "@types";

import { Date, Image, InfoWrapper, Text, Title, Wrapper } from "./styled";

type SecondaryVariantProps = {
  card: BlogCardType;
  lang: Language;
  handleLinkClick: (id: string) => () => void;
};

export const SecondaryVariant = ({ card, handleLinkClick }: SecondaryVariantProps) => {
  const { date, image, title, text, id } = card;

  return (
    <Wrapper onClick={handleLinkClick(id)}>
      <Image src={image} />
      <InfoWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </InfoWrapper>
    </Wrapper>
  );
};
