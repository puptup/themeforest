import { CompaniesList } from "@components/companies-list";
import { MainWrapper } from "@ui/main-wrapper";

import { Block, Container, Description, Title } from "./styled";

export const OurCustomersSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Block>
          <Title>Our customers</Title>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudan, totam rem aperiam.
          </Description>
        </Block>
        <CompaniesList />
      </Container>
    </MainWrapper>
  );
};
