import { BlogCard } from "@components/blog-card";
import { blogCards } from "@constants/blogCards";
import { Language } from "@localization";
import { Button } from "@ui/button";
import { MainWrapper } from "@ui/main-wrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CardsWrapper, Container } from "./styled";

export const BlogsSection = () => {
  const [shownCards, setShownCards] = useState(6);
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  const handleMoreArticles = () => {
    if (blogCards[lang].length > shownCards) {
      setShownCards(shownCards + 3);
    }
  };

  return (
    <MainWrapper>
      <Container>
        <CardsWrapper>
          {blogCards[lang].slice(0, shownCards).map((card) => (
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
