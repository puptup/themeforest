import { TestimonalCardType } from "@types";

import { ImgOutside } from "./variants/imgOutside";
import { Small } from "./variants/small";

export type TestimonalCardProps = {
  card: TestimonalCardType;
  variant: "small" | "img-outside";
};

export type AnyVariantsProps = {
  card: TestimonalCardType;
};

const cardByVariant = {
  small: Small,
  "img-outside": ImgOutside,
};

export const TestimonalCard = ({ card, variant }: TestimonalCardProps) => {
  const CardVariant = cardByVariant[variant];
  return <CardVariant card={card} />;
};
