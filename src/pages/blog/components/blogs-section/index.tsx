import { BlogCard } from "@components/blog-card";
import { blogCards } from "@constants/blogCards";
import { Button } from "@ui/button";
import { MainWrapper } from "@ui/main-wrapper";
import { useState } from "react";
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.betweenItems.xxl};
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const BlogsSection = () => {
  const [shownCards, setShownCards] = useState(6);

  const handleMoreArticles = () => {
    if (blogCards.length > shownCards) {
      setShownCards(shownCards + 3);
    }
  };

  return (
    <MainWrapper>
      <Container>
        <CardsWrapper>
          {blogCards.slice(0, shownCards).map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </CardsWrapper>
        <Button size="xl" onClick={handleMoreArticles}>
          More articles
        </Button>
      </Container>
    </MainWrapper>
  );
};
