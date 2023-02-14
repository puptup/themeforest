import { contacts } from "@constants/contacts";
import { ContactUsForm } from "@modules/contact-us-form";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import {
  Block,
  ContactUsContainer,
  Container,
  Description,
  DescriptionBlock,
  Info,
  Title,
} from "./styled";

const tPath = "aboutUs.contactUsSection.";

export const ContactUsSection = () => {
  const { t } = useTranslation();
  return (
    <ContactUsContainer>
      <MainWrapper>
        <Container>
          <DescriptionBlock>
            <Block>
              <Title>{t(`${tPath}title`)}</Title>
              <Description>{t(`${tPath}description`)}</Description>
            </Block>
            <Block>
              {contacts.map(({ title, path, subTitle }) => (
                <div key={path}>
                  <Description>{t(subTitle)}</Description>
                  <Info href={path} target="_blank">
                    {t(title)}
                  </Info>
                </div>
              ))}
            </Block>
          </DescriptionBlock>
          <ContactUsForm variant="primary" />
        </Container>
      </MainWrapper>
    </ContactUsContainer>
  );
};
