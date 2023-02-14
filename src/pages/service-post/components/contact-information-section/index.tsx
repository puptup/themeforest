import { contacts } from "@constants/contacts";
import { useLocalization } from "@hooks/useLocalization";
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

const tPath = "servicePost.concactInformation.";

export const ContactInformationSection = () => {
  const { t } = useLocalization();

  return (
    <Wrapper>
      <MainWrapper>
        <Container>
          <Block>
            <Title>{t(`${tPath}title`)}</Title>
            <Description>{t(`${tPath}description`)}</Description>
            <ContactsWrapper>
              {contacts.map(({ icon, title, path }) => (
                <InfoWrapper key={path} href={path} target="_blank">
                  <InfoIcon src={icon} />
                  {t(title)}
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
