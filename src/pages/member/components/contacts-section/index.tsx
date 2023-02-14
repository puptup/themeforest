import { useLocalization } from "@hooks/useLocalization";
import { ContactUsForm } from "@modules/contact-us-form";
import { MainWrapper } from "@ui/main-wrapper";

import { Container, Title } from "./styled";

type ContactsSectionProps = {
  name: string;
};

const tPath = "member.contactsSection.";

export const ContactsSection = ({ name }: ContactsSectionProps) => {
  const { t } = useLocalization();
  return (
    <MainWrapper>
      <Container>
        <Title>{t(`${tPath}title`, { name: name.split(" ")[0] })}</Title>
        <ContactUsForm variant="secondary" />
      </Container>
    </MainWrapper>
  );
};
