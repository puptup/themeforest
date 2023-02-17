import { useLocalization } from "@hooks/useLocalization";
import { CompaniesList, MainWrapper } from "tmfcomponents";

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
