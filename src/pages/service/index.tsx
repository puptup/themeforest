import { serviceCards } from "@constants/serviceCards";
import { MainWrapper } from "@ui/main-wrapper";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ServiceCardContainer } from "./components/service-card-container";

export const Service = () => {
  const { id } = useParams();

  const card = useMemo(() => serviceCards.filter((item) => item.id === id)[0], [id]);

  if (!card) return <Navigate to="/services" />;

  return (
    <MainWrapper>
      <ServiceCardContainer card={card} />
    </MainWrapper>
  );
};
