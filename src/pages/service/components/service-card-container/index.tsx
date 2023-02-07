import { controlIcons } from "@assets/control-icons";
import { ServiceCardType } from "@types";
import { Link } from "@ui/link";

import { History, Text, Title } from "./styled";

type ServiceCardContainerProps = {
  card: ServiceCardType;
};

export const ServiceCardContainer = ({ card }: ServiceCardContainerProps) => {
  const { title, fullText } = card;
  return (
    <>
      <History>
        <Link to="/">Home</Link>
        <img src={controlIcons.Divider} alt="divider" />
        <Link to="/services">Services</Link>
        <img src={controlIcons.Divider} alt="divider" />
        <span>{title}</span>
      </History>
      <Title>{title}</Title>
      <Text>{fullText}</Text>
    </>
  );
};
