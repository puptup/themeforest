import { MainWrapper } from "@ui/main-wrapper";
import { useNavigate } from "react-router-dom";

import { Button, ContactUsWrapper, Container, Description, Title, Wrapper } from "./styled";

export const NeedHelpSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contacts");
  };

  return (
    <ContactUsWrapper>
      <MainWrapper>
        <Container>
          <Wrapper>
            <Title>Do you need help?</Title>
            <Description>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Description>
            <Button size="xl" onClick={handleNavigate}>
              Contact us
            </Button>
          </Wrapper>
        </Container>
      </MainWrapper>
    </ContactUsWrapper>
  );
};
