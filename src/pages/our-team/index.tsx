import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";

import { MobileHeadSection } from "./components/mobile-head-section";
import { TeamSection } from "./components/team-section";

const tPath = "ourTeam.";

export const OurTeamPage = () => {
  const isMobile = useMobile();
  const { t } = useLocalization();

  return (
    <>
      {isMobile ? (
        <>
          <HeadSection
            variant="primary"
            pageName={t(`${tPath}pageName`)}
            title={t(`${tPath}title`)}
            description={t(`${tPath}description`)}
          />
          <MobileHeadSection />
        </>
      ) : (
        <HeadSection
          variant="secondary"
          pageName={t(`${tPath}pageName`)}
          title={t(`${tPath}pageName`)}
          description={[t(`${tPath}description`)]}
        />
      )}
      <TeamSection />
      <SubscribeSection />
    </>
  );
};
