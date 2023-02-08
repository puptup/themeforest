import { companiesLogos } from "@assets/companies";
import { CompaniesListWrapper, CompanyLogo } from "@modules/statistics-section/styled";

export const CompaniesList = () => {
  return (
    <CompaniesListWrapper>
      {companiesLogos.map((logo, index) => (
        <CompanyLogo key={index} src={logo} />
      ))}
    </CompaniesListWrapper>
  );
};
