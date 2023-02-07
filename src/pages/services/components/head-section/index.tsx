import { controlIcons } from "@assets/control-icons";
import { ServiceCard } from "@components/service-card";
import { serviceCards } from "@constants/serviceCards";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Description, Head, History, PageName, ServicesCardWrapper, Title } from "./styled";

export const HeadSection = () => {
  return (
    <MainWrapper>
      <History>
        <Link to="/">Home</Link> <img src={controlIcons.Divider} alt="divider" /> Services
      </History>
      <Head>
        <PageName>Services</PageName>
        <Title>Data Analytics Services</Title>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
        </Description>
      </Head>
      <ServicesCardWrapper>
        {serviceCards.map((card) => (
          <ServiceCard card={card} key={card.id} />
        ))}
      </ServicesCardWrapper>
    </MainWrapper>
  );
};
