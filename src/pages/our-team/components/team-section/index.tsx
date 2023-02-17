import { Links } from "@constants/links";
import { membersCards } from "@constants/members";
import { useIntersectionObserver } from "@hooks/useIsInViewPort";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainWrapper, MemberCard } from "tmfcomponents";

import { CardsContainer, Container } from "./styled";

export const TeamSection = () => {
  const observableElement = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const { language } = useLocalization();
  const navigate = useNavigate();

  const [countShownCards, setCountShownCards] = useState(!isMobile ? 6 : 3);

  const handleUpdateCards = (isIntersection: boolean) => {
    if (isIntersection && countShownCards < membersCards[language].length)
      setCountShownCards(countShownCards + 6);
  };

  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.ourTeam}/${id}`);
    },
    []
  );

  useIntersectionObserver(observableElement, handleUpdateCards);

  return (
    <MainWrapper>
      <Container>
        <CardsContainer>
          {membersCards[language]
            .slice(0, countShownCards)
            .map(({ name, role, image, id }, index) => (
              <MemberCard
                handleLinkClick={handleLinkClick}
                key={index}
                name={name}
                role={role}
                image={image}
                id={id}
              />
            ))}
        </CardsContainer>
        <div ref={observableElement} />
      </Container>
    </MainWrapper>
  );
};
