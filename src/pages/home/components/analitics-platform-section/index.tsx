import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BlockWrapper, Button, Container, Description, HeadingWrapper, Title } from "./styled";

const tPath = "home.analitics.";

export const AnaliticsPlatformSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <MainWrapper>
      <Container>
        <HeadingWrapper>
          <Title>{t(`${tPath}title`)}</Title>
        </HeadingWrapper>
        <BlockWrapper>
          <Description>{t(`${tPath}description`)}</Description>
          <Button size="xl" onClick={routeChange}>
            {t(`${tPath}discoverMore`)}
          </Button>
        </BlockWrapper>
      </Container>
    </MainWrapper>
  );
};
