import { BlogCard } from "@components/blog-card";
import { blogCards } from "@constants/blogCards";
import { useLocalization } from "@hooks/useLocalization";
import { Button } from "@ui/button";
import { MainWrapper } from "@ui/main-wrapper";
import { useState } from "react";

import { CardsWrapper, Container } from "./styled";

export const BlogsSection = () => {
  const [shownCards, setShownCards] = useState(6);
  const { t, language } = useLocalization();

  const handleMoreArticles = () => {
    if (blogCards[language].length > shownCards) {
      setShownCards(shownCards + 3);
    }
  };

  return (
    <MainWrapper>
      <Container>
        <CardsWrapper>
          {blogCards[language].slice(0, shownCards).map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </CardsWrapper>
        <Button size="xl" onClick={handleMoreArticles}>
          {t("blog.moreArticles")}
        </Button>
      </Container>
    </MainWrapper>
  );
};
