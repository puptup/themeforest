import { NeedHelpSection } from "@modules/need-help-section";
import { SubscribeSection } from "@modules/subscribe";

import { FaqsSection } from "./components/faqs-section";

export const FAQSPage = () => {
  return (
    <>
      <FaqsSection />
      <NeedHelpSection />
      <SubscribeSection />
    </>
  );
};
