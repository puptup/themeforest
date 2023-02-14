import { CompaniesList } from "@components/companies-list";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";

import { Block, Container, Description, Title } from "./styled";

const tPath = "aboutUs.ourCustomersSection.";

export const OurCustomersSection = () => {
  const { t } = useLocalization();

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
