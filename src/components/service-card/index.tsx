import { Links } from "@constants/links";
import { ServiceCardType } from "@types";
import { Link } from "@ui/arrow-link";

import { Description, Img, TextBlock, Title, Wrapper } from "./styled";

type ServiceCardProps = {
  card: ServiceCardType;
};

export const ServiceCard = ({ card }: ServiceCardProps) => {
  const { image, title, description, id } = card;
  return (
    <Wrapper>
      <Img src={image} />
      <TextBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextBlock>
      <Link to={`${Links.services}/${id}`}>Read more</Link>
    </Wrapper>
  );
};
