import { controlIcons } from "@assets/control-icons";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Container, Description, HeadSectionWrapper, LinksWrapper, Title } from "./styled";

export const HeadSection = () => {
  return (
    <HeadSectionWrapper>
      <MainWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <img src={controlIcons.Divider} alt="divider" />
          <span>Our team</span>
        </LinksWrapper>
        <Container>
          <Title>Our team</Title>
          <div>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
              laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
              consectetur.
            </Description>
            <Description>
              Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
              tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
              commodo libero.
            </Description>
          </div>
        </Container>
      </MainWrapper>
    </HeadSectionWrapper>
  );
};
