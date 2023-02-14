import { Links } from "@constants/links";
import { Language } from "@localization";
import { Link } from "@ui/arrow-link";

import { Description, Icon, TextWrapper, Title, Wrapper } from "./styled";

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
  id: string;
  lng: Language;
};

export const SolutionCard = ({ icon, title, description, id, lng }: SolutionCardProps) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <Link to={`${Links.solutions}/${id}`}>{lng !== "ru" ? "Read more" : "Читать далее"}</Link>
    </Wrapper>
  );
};
