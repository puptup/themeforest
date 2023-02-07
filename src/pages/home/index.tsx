import { BenefitsSection } from "@modules/benefits";
import { NeedHelpSection } from "@modules/need-help-section";
import { OurPricingSection } from "@modules/pricing";
import { StatiscticsSection } from "@modules/statistics-section";
import { SubscribeSection } from "@modules/subscribe";

import { AnaliticsPlatformSection } from "./components/analitics-platform-section";
import { FindTruePowerSection } from "./components/find-true-power-section";
import { NewSolutionsSection } from "./components/new-solutions-section";
import { OurBlogSection } from "./components/our-blog-section";
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
      <NeedHelpSection />
      <SubscribeSection />
    </>
  );
};
