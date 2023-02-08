import { useMobile } from "@hooks/useMobile";
import { SubscribeSection } from "@modules/subscribe";

import { HeadSection } from "./components/head-section";
import { MobileHeadSection } from "./components/mobile-head-section";
import { TeamSection } from "./components/team-section";

export const OurTeamPage = () => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? <MobileHeadSection /> : <HeadSection />}
      <TeamSection />
      <SubscribeSection />
    </>
  );
};
