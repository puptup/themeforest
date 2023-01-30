import { BenefitsSection } from "@modules/benefits";
import { ContactUs } from "@modules/contact-us";
import { OurPricingSection } from "@modules/pricing";
import { SubscribeSection } from "@modules/subscribe";
import React from "react";

import { AnaliticsPlatformSection } from "./components/analitics-platform-section";
import { FindTruePowerSection } from "./components/find-true-power-section";
import { NewSolutionsSection } from "./components/new-solutions-section";
import { OurBlogSection } from "./components/our-blog-section";
import { StatiscticsSection } from "./components/statistics-section";
import { TestimonialsSection } from "./components/testimonials-section";

export const HomePage = () => {
  return (
    <>
      <FindTruePowerSection />
      <AnaliticsPlatformSection />
      <NewSolutionsSection />
      <StatiscticsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <OurPricingSection />
      <OurBlogSection />
      <ContactUs />
      <SubscribeSection />
    </>
  );
};
