import { MemberCard } from "@components/member-card";
import { membersCards } from "@constants/members";
import { useIntersectionObserver } from "@hooks/useIsInViewPort";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";
import { useRef, useState } from "react";

import { CardsContainer, Container } from "./styled";

export const TeamSection = () => {
  const observableElement = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [countShownCards, setCountShownCards] = useState(!isMobile ? 9 : 6);

  const handleUpdateCards = (isIntersection: boolean) => {
    if (isIntersection && countShownCards < membersCards.length)
      setCountShownCards(countShownCards + 6);
  };

  useIntersectionObserver(observableElement, handleUpdateCards);

  return (
    <MainWrapper>
      <Container>
        <CardsContainer>
          {membersCards.slice(0, countShownCards).map(({ name, role, image, id }, index) => (
            <MemberCard key={index} name={name} role={role} image={image} id={id} />
          ))}
        </CardsContainer>
        <div ref={observableElement} />
      </Container>
    </MainWrapper>
  );
};
