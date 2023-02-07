import { NeedHelpSection } from "@modules/need-help-section";
import { SubscribeSection } from "@modules/subscribe";

import { HeadSection } from "./components/head-section";

export const FAQSPage = () => {
  return (
    <>
      <HeadSection />
      <NeedHelpSection />
      <SubscribeSection />
    </>
  );
};
