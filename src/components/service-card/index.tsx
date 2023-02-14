import { Links } from "@constants/links";
import { Language } from "@localization";
import { ServiceCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Description, Img, TextBlock, Title, Wrapper } from "./styled";

type ServiceCardProps = {
  card: ServiceCardType;
  lng: Language;
};

export const ServiceCard = ({ card, lng }: ServiceCardProps) => {
  const { image, title, description, id } = card;
  return (
    <Wrapper>
      <Img src={image} />
      <TextBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextBlock>
      <Link to={`${Links.services}/${id}`}>{lng !== "ru" ? "Read more" : "Читать далее"}</Link>
    </Wrapper>
  );
};
