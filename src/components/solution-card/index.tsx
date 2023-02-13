import { Links } from "@constants/links";
import { Link } from "@ui/arrow-link";

import { Description, Icon, TextWrapper, Title, Wrapper } from "./styled";

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
  id: string;
};

export const SolutionCard = ({ icon, title, description, id }: SolutionCardProps) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <Link to={`${Links.solutions}/${id}`}>Read more</Link>
    </Wrapper>
  );
};
