import { controlIcons } from "@assets/control-icons";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Block, Container, HeadSectionWrapper, LinksWrapper, Title } from "./styled";

export const HeadSection = () => {
  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>About Us</Title>
            <LinksWrapper>
              <Link to="/">Home</Link>
              <img src={controlIcons.Divider} alt="divider" />
              <span>About us</span>
            </LinksWrapper>
          </Block>
        </Container>
      </MainWrapper>
    </HeadSectionWrapper>
  );
};
