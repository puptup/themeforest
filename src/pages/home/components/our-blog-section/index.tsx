import { BlogCard } from "@components/blog-card";
import { Carousel } from "@components/carousel";
import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button, CardsWrapper, Container, Title } from "./styled";

const tPath = "home.ourBlog.";

export const OurBlogSection = () => {
  const isMobile = useMobile();
  const { t, language } = useLocalization();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(Links.blog);
  };

  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.blog}/${id}`);
    },
    []
  );

  const cards = blogCards[language];

  return (
    <MainWrapper>
      <Container>
        {isMobile && <Title>{t(`${tPath}title`)}</Title>}
        {!isMobile ? (
          <Carousel title={t(`${tPath}title`)} slidesPerView={3}>
            {cards.map((card) => (
              <BlogCard
                key={card.id}
                card={card}
                variant="primary"
                lang={language}
                handleLinkClick={handleLinkClick}
              />
            ))}
          </Carousel>
        ) : (
          <CardsWrapper>
            {cards.slice(0, 3).map((card) => (
              <BlogCard
                key={card.id}
                card={card}
                variant="primary"
                lang={language}
                handleLinkClick={handleLinkClick}
              />
            ))}
          </CardsWrapper>
        )}
        {isMobile && (
          <Button size="xl" onClick={handleNavigate}>
            {t(`${tPath}learnMore`)}
          </Button>
        )}
      </Container>
    </MainWrapper>
  );
};
