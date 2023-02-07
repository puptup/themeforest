import { SubscribeSection } from "@modules/subscribe";

import { ContactUsSection } from "./components/contact-us-section";
import { DescriptionSection } from "./components/description-section";
import { EnsomeInNumbersSection } from "./components/ensome-in-numbers";
import { HeadSection } from "./components/head-section";
import { OurCustomersSection } from "./components/our-customers-section";
import { TestimonialsSection } from "./components/testimonials-section";

export const AboutUsPage = () => {
  return (
    <>
      <HeadSection />
      <DescriptionSection />
      <EnsomeInNumbersSection />
      <OurCustomersSection />
      <TestimonialsSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  );
};
