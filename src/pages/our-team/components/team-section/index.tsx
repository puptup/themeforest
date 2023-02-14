import { MemberCard } from "@components/member-card";
import { membersCards } from "@constants/members";
import { useIntersectionObserver } from "@hooks/useIsInViewPort";
import { useMobile } from "@hooks/useMobile";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { CardsContainer, Container } from "./styled";

export const TeamSection = () => {
  const observableElement = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;
  const [countShownCards, setCountShownCards] = useState(!isMobile ? 6 : 3);

  const handleUpdateCards = (isIntersection: boolean) => {
    if (isIntersection && countShownCards < membersCards[lang].length)
      setCountShownCards(countShownCards + 6);
  };

  useIntersectionObserver(observableElement, handleUpdateCards);

  return (
    <MainWrapper>
      <Container>
        <CardsContainer>
          {membersCards[lang].slice(0, countShownCards).map(({ name, role, image, id }, index) => (
            <MemberCard key={index} name={name} role={role} image={image} id={id} />
          ))}
        </CardsContainer>
        <div ref={observableElement} />
      </Container>
    </MainWrapper>
  );
};
