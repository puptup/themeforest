import { Language } from "@localization";
import { BlogCardType } from "@types";

import { cardVariant } from "./variants";

type BlogCardProps = {
  variant: "primary" | "secondary" | "tertiary";
  card: BlogCardType;
  lang: Language;
  handleLinkClick: (id: string) => () => void;
};

export const BlogCard = ({ variant, card, lang, handleLinkClick }: BlogCardProps) => {
  const Card = cardVariant[variant];

  return <Card card={card} lang={lang} handleLinkClick={handleLinkClick} />;
};
