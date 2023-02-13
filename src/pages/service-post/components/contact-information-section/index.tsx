import { contacts } from "@constants/contacts";
import { ContactUsForm } from "@modules/contact-us-form";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Block,
  ContactsWrapper,
  Container,
  Description,
  InfoIcon,
  InfoWrapper,
  Title,
  Wrapper,
} from "./styled";

export const ContactInformationSection = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>Contact information</Title>
            <Description>
              Fill up the form and our Team will get back to you with 25 hours.
            </Description>
            <ContactsWrapper>
              {contacts.map(({ icon, title, path }) => (
                <InfoWrapper key={path} href={path} target="_blank">
                  <InfoIcon src={icon} />
                  {title}
                </InfoWrapper>
              ))}
            </ContactsWrapper>
          </Block>
          <ContactUsForm variant="secondary" />
        </Container>
      </MainWrapper>
    </Wrapper>
  );
};
