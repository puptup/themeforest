import FaceBook from "@assets/footer-icons/facebook.svg";
import Linkedin from "@assets/footer-icons/linkedin.svg";
import Twitter from "@assets/footer-icons/twitter.svg";
import { MainWrapper } from "@ui/main-wrapper";

import { Block, Container, LinksContainer, NameSubTitle, NameTitle, SotialIcon } from "./styled";

type MemberSectionProps = {
  member: {
    id: string;
    image: string;
    role: string;
    name: string;
    description: string;
    links: {
      twitter: string;
      linkedin: string;
      facebook: string;
    };
  };
};

export const MemberSection = ({ member }: MemberSectionProps) => {
  const { image, role, name, description, links } = member;

  return (
    <MainWrapper>
      <Container>
        <img src={image} alt="1" />
        <Block>
          <div>
            <NameTitle>Name</NameTitle>
            <NameSubTitle>{name}</NameSubTitle>
          </div>
          <div>
            <NameTitle>Position</NameTitle>
            <NameSubTitle>{role}</NameSubTitle>
          </div>
          <div>
            <NameTitle>Description</NameTitle>
            <NameSubTitle>{description}</NameSubTitle>
          </div>
          <div>
            <NameTitle>Social networks</NameTitle>
            <LinksContainer>
              <SotialIcon href={links.linkedin} icon={Linkedin} target="_blank" />
              <SotialIcon href={links.twitter} icon={Twitter} target="_blank" />
              <SotialIcon href={links.facebook} icon={FaceBook} target="_blank" />
            </LinksContainer>
          </div>
        </Block>
      </Container>
    </MainWrapper>
  );
};
