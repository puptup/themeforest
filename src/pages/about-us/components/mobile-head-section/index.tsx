import IMG from "@assets/img_10.png";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";

import { Img } from "./styled";

export const MobileHeadSection = () => {
  return (
    <>
      <MainWrapper>
        <HeadSection
          variant="primary"
          pageName="About us"
          title="We work with 15 years of experience"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo."
        />
      </MainWrapper>
      <Img src={IMG} />
    </>
  );
};
