import IMG from "@assets/img_10.png";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { Img } from "./styled";

const tPath = "aboutUs.mobileHeadSection.";

export const MobileHeadSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <MainWrapper>
        <HeadSection
          variant="primary"
          pageName={t(`${tPath}pageName`)}
          title={t(`${tPath}title`)}
          description={t(`${tPath}description`)}
        />
      </MainWrapper>
      <Img src={IMG} />
    </>
  );
};
