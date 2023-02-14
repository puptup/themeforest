import FaceBook from "@assets/footer-icons/facebook.svg";
import Linkedin from "@assets/footer-icons/linkedin.svg";
import Twitter from "@assets/footer-icons/twitter.svg";
import { useLocalization } from "@hooks/useLocalization";
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

const tPath = "member.memberSection.";

export const MemberSection = ({ member }: MemberSectionProps) => {
  const { image, role, name, description, links } = member;
  const { t } = useLocalization();
  return (
    <MainWrapper>
      <Container>
        <img src={image} alt="1" />
        <Block>
          <div>
            <NameTitle>{t(`${tPath}name`)}</NameTitle>
            <NameSubTitle>{name}</NameSubTitle>
          </div>
          <div>
            <NameTitle>{t(`${tPath}position`)}</NameTitle>
            <NameSubTitle>{role}</NameSubTitle>
          </div>
          <div>
            <NameTitle>{t(`${tPath}description`)}</NameTitle>
            <NameSubTitle>{description}</NameSubTitle>
          </div>
          <div>
            <NameTitle>{t(`${tPath}socialNetworks`)}</NameTitle>
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
