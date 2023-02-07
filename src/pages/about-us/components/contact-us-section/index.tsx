import { ContactUsForm } from "@components/contact-us-form";
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
              <div>
                <Description>Email address</Description>
                <Info>ensome@info.co.us</Info>
              </div>
              <div>
                <Description>Phone number</Description>
                <Info>+1601-201-5580</Info>
              </div>
              <div>
                <Description>Address</Description>
                <Info>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Info>
              </div>
            </Block>
          </DescriptionBlock>
          <ContactUsForm variant="primary" />
        </Container>
      </MainWrapper>
    </ContactUsContainer>
  );
};
