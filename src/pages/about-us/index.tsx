import { useMobile } from "@hooks/useMobile";
import { NeedHelpSection } from "@modules/need-help-section";
import { StatiscticsSection } from "@modules/statistics-section";
import { SubscribeSection } from "@modules/subscribe";

import { ContactUsSection } from "./components/contact-us-section";
import { DescriptionSection } from "./components/description-section";
import { EnsomeInNumbersSection } from "./components/ensome-in-numbers";
import { HeadSection } from "./components/head-section";
import { MobileHeadSection } from "./components/mobile-head-section";
import { OurCustomersSection } from "./components/our-customers-section";
import { TestimonialsSection } from "./components/testimonials-section";

export const AboutUsPage = () => {
  const isMobile = useMobile();
  return (
    <>
      {!isMobile ? <HeadSection /> : <MobileHeadSection />}
      {!isMobile && <DescriptionSection />}
      {!isMobile ? <EnsomeInNumbersSection /> : <StatiscticsSection />}
      {!isMobile && <OurCustomersSection />}
      <TestimonialsSection />
      {!isMobile ? <ContactUsSection /> : <NeedHelpSection />}
      <SubscribeSection />
    </>
  );
};
