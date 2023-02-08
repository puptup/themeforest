import { controlIcons } from "@assets/control-icons";
import IMG from "@assets/img_10.png";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Container, Description, History, Img, PageName, Title } from "./styled";

export const MobileHeadSection = () => {
  return (
    <>
      <MainWrapper>
        <History>
          <Link to="/">Home</Link> <img src={controlIcons.Divider} alt="divider" /> About us
        </History>
        <Container>
          <PageName>About us</PageName>
          <Title>We work with 15 years of experience</Title>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </Description>
        </Container>
      </MainWrapper>
      <Img src={IMG} />
    </>
  );
};
