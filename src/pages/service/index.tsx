import { serviceCards } from "@constants/serviceCards";
import { ServiceCardType } from "@types";
import { MainWrapper } from "@ui/main-wrapper";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ServiceCardContainer } from "./components/service-card-container";

export const Service = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState<ServiceCardType>();

  useEffect(() => {
    const newCard = serviceCards.filter((item) => item.id === id)[0];
    if (!newCard) navigate("/services");
    setCard(newCard);
  }, []);

  return (
    <MainWrapper>
      {!card ? (
        <div style={{ minHeight: "100vh" }}>loading...</div>
      ) : (
        <ServiceCardContainer card={card} />
      )}
    </MainWrapper>
  );
};
