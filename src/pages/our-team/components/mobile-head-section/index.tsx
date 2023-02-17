import IMG from "@assets/img_10.png";
import { MainWrapper } from "tmfcomponents";

import { Description, DescriptionContainer, Img } from "./styled";

export const MobileHeadSection = () => {
  return (
    <>
      <Img src={IMG} />
      <MainWrapper>
        <DescriptionContainer>
          <Description>
            Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
            euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
            orci. Sed quis lobortis eros. Fusce id commodo libero.
          </Description>
          <Description>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros
            non iaculis.
          </Description>
        </DescriptionContainer>
      </MainWrapper>
    </>
  );
};
