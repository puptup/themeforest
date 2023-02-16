import { BlogCard } from "@components/blog-card/";
import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { Button } from "@ui/button";
import { MainWrapper } from "@ui/main-wrapper";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardsWrapper, Container } from "./styled";

export const BlogsSection = () => {
  const [shownCards, setShownCards] = useState(6);
  const { t, language } = useLocalization();

  const navigate = useNavigate();
  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.blog}/${id}`);
    },
    []
  );

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
            <BlogCard
              key={card.id}
              card={card}
              lang={language}
              variant="primary"
              handleLinkClick={handleLinkClick}
            />
          ))}
        </CardsWrapper>
        <Button size="xl" onClick={handleMoreArticles}>
          {t("blog.moreArticles")}
        </Button>
      </Container>
    </MainWrapper>
  );
};
