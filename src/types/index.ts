import { benefitsIcons } from "@assets/benefits-icons";

export type Link = {
  path: string;
  title: string;
};

export type BenefitCardType = {
  iconName: keyof typeof benefitsIcons;
  title: string;
  id: string;
  text: string;
};

export type TestimonalCardType = {
  id: string;
  image: string;
  name: string;
  role: string;
  text: string;
};

export type PricingCardType = {
  id: string;
  name: string;
  pricePerYear: number | null;
  pricePerMonth: number;
  benefits: string[];
};

export type Pricing = "monthly" | "yearly";
export type ChoosedPlan = {
  name: string;
  price: number;
  benefits: string[];
};

export type BlogCardType = {
  id: string;
  image: string;
  date: string;
  title: string;
  text: string;
  link: string;
};

export type ServiceCardType = {
  id: string;
  image: string;
  title: string;
  description: string;
  fullText: string;
};

export type CountactUsFormValues = {
  email: string;
  name: string;
  theme: string;
  message: string;
};
