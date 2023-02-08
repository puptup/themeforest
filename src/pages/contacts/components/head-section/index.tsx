import { controlIcons } from "@assets/control-icons";
import { contacts } from "@constants/contacts";
import { ContactUsForm } from "@modules/contact-us-form";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Container,
  History,
  Icon,
  InfoBlock,
  InfoDescription,
  InfoTitle,
  InfoWrapper,
  PrimaryText,
  Title,
} from "./styled";

export const HeadSection = () => {
  return (
    <MainWrapper>
      <History>
        <Link to="/">Home</Link>
        <img src={controlIcons.Divider} alt="divider" /> Contacts
      </History>
      <Container>
        <Title>
          How can we <PrimaryText>help you?</PrimaryText>
        </Title>
        <ContactUsForm variant="secondary" />
      </Container>
      <InfoBlock>
        {contacts.map(({ title, icon, value }) => (
          <div key={title}>
            <InfoWrapper>
              <Icon src={icon} />
              <InfoTitle>{title}</InfoTitle>
            </InfoWrapper>
            <InfoDescription>{value}</InfoDescription>
          </div>
        ))}
      </InfoBlock>
    </MainWrapper>
  );
};
