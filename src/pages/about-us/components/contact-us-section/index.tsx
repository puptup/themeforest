import { contacts } from "@constants/contacts";
import { ContactUsForm } from "@modules/contact-us-form";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Block,
  ContactUsContainer,
  Container,
  Description,
  DescriptionBlock,
  Info,
  Title,
} from "./styled";

export const ContactUsSection = () => {
  return (
    <ContactUsContainer>
      <MainWrapper>
        <Container>
          <DescriptionBlock>
            <Block>
              <Title>Left questions? Contacts us now for a free consultation and free trial!</Title>
              <Description>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi.
              </Description>
            </Block>
            <Block>
              {contacts.map(({ title, path, subTitle }) => (
                <div key={path}>
                  <Description>{subTitle}</Description>
                  <Info href={path} target="_blank">
                    {title}
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
