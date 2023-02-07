import { NeedHelpSection } from "@modules/need-help-section";
import { StatiscticsSection } from "@modules/statistics-section";
import { SubscribeSection } from "@modules/subscribe";

import { HeadSection } from "./components/head-section";

export const ServicesPage = () => {
  return (
    <>
      <HeadSection />
      <StatiscticsSection />
      <NeedHelpSection />
      <SubscribeSection />
    </>
  );
};
