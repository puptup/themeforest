import { companiesLogos } from "@assets/companies";
import { CompaniesListWrapper, CompanyLogo } from "@modules/statistics-section/styled";
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
        <CompaniesListWrapper>
          {companiesLogos.map((logo, index) => (
            <CompanyLogo key={index} src={logo} />
          ))}
        </CompaniesListWrapper>
      </Container>
    </MainWrapper>
  );
};
