import { useLocalization } from "@hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import { MainWrapper } from "tmfcomponents";

import { Button, ContactUsWrapper, Container, Description, Title, Wrapper } from "./styled";

const tPath = "needHelpSection.";

export const NeedHelpSection = () => {
  const navigate = useNavigate();
  const { t } = useLocalization();

  const handleNavigate = () => {
    navigate("/contacts");
  };

  return (
    <ContactUsWrapper>
      <MainWrapper>
        <Container>
          <Wrapper>
            <Title>{t(`${tPath}title`)}</Title>
            <Description>{t(`${tPath}description`)}</Description>
            <Button size="xl" onClick={handleNavigate}>
              {t(`${tPath}contactUs`)}
            </Button>
          </Wrapper>
        </Container>
      </MainWrapper>
    </ContactUsWrapper>
  );
};
