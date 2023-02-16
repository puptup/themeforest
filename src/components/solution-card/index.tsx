/* eslint-disable jsx-a11y/anchor-is-valid */
import { Language } from "@localization";
import { Link } from "@ui/arrow-link";

import { Description, Icon, TextWrapper, Title, Wrapper } from "./styled";

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
  id: string;
  lng: Language;
  handleLinkClick: (id: string) => () => void;
};

export const SolutionCard = ({
  icon,
  title,
  description,
  id,
  lng,
  handleLinkClick,
}: SolutionCardProps) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <Link onClick={handleLinkClick(id)}>{lng !== "ru" ? "Read more" : "Читать далее"}</Link>
    </Wrapper>
  );
};
