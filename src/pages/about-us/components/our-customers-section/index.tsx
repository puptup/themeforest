import { CompaniesList } from "@components/companies-list";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { Block, Container, Description, Title } from "./styled";

const tPath = "aboutUs.ourCustomersSection.";

export const OurCustomersSection = () => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <Container>
        <Block>
          <Title>{t(`${tPath}title`)}</Title>
          <Description>{t(`${tPath}description`)}</Description>
        </Block>
        <CompaniesList />
      </Container>
    </MainWrapper>
  );
};
