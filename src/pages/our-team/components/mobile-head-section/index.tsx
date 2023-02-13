import { controlIcons } from "@assets/control-icons";
import IMG from "@assets/img_10.png";
import { Links } from "@constants/links";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Container,
  Description,
  DescriptionContainer,
  History,
  Img,
  PageName,
  Title,
} from "./styled";

export const MobileHeadSection = () => {
  return (
    <>
      <MainWrapper>
        <History>
          <Link to={`${Links.home}`}>Home</Link> <img src={controlIcons.Divider} alt="divider" />{" "}
          Our team
        </History>
        <Container>
          <PageName>Our team</PageName>
          <Title>Get to know us closer</Title>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </Description>
        </Container>
      </MainWrapper>
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
