import { ServiceCard } from "@components/service-card";
import { serviceCards } from "@constants/serviceCards";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";

import { ServicesCardWrapper } from "./styled";

export const ServicesSection = () => {
  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName="Services"
        title="Data Analytics Services"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore."
      />
      <ServicesCardWrapper>
        {serviceCards.map((card) => (
          <ServiceCard card={card} key={card.id} />
        ))}
      </ServicesCardWrapper>
    </MainWrapper>
  );
};
