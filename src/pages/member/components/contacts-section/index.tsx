import { ContactUsForm } from "@modules/contact-us-form";
import { MainWrapper } from "@ui/main-wrapper";

import { Container, Title } from "./styled";

type ContactsSectionProps = {
  name: string;
};

export const ContactsSection = ({ name }: ContactsSectionProps) => {
  return (
    <MainWrapper>
      <Container>
        <Title>Want {name.split(" ")[0]} to share his expertise with you?</Title>
        <ContactUsForm variant="secondary" />
      </Container>
    </MainWrapper>
  );
};
