import { Language } from "@localization";
import { BlogCardType } from "@types";

import { cardVariant } from "./variants";

type BlogCardProps = {
  variant: "primary" | "secondary" | "tertiary";
  card: BlogCardType;
  lang: Language;
};

export const BlogCard = ({ variant, card, lang }: BlogCardProps) => {
  const Card = cardVariant[variant];

  return <Card card={card} lang={lang} />;
};
