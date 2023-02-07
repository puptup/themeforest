import { MemberCard } from "@components/member-card";
import { membersCards } from "@constants/members";
import { useIntersectionObserver } from "@hooks/useIsInViewPort";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";
import { useRef, useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 240px;
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

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
          {membersCards.slice(0, countShownCards).map(({ name, role, image }, index) => (
            <MemberCard key={index} name={name} role={role} image={image} />
          ))}
        </CardsContainer>
        <div ref={observableElement} />
      </Container>
    </MainWrapper>
  );
};
