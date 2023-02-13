import { BlogCard } from "@components/blog-card";
import { Carousel } from "@components/carousel";
import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";
import { useNavigate } from "react-router-dom";

import { Button, CardsWrapper, Container, Title } from "./styled";

export const OurBlogSection = () => {
  const isMobile = useMobile();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(Links.blog);
  };

  return (
    <MainWrapper>
      <Container>
        {isMobile && <Title>Our blog</Title>}
        {!isMobile ? (
          <Carousel title="Our blog" slidesPerView={3}>
            {blogCards.map((card) => (
              <BlogCard key={card.id} card={card} />
            ))}
          </Carousel>
        ) : (
          <CardsWrapper>
            {blogCards.slice(0, 3).map((card) => (
              <BlogCard key={card.id} card={card} />
            ))}
          </CardsWrapper>
        )}
        {isMobile && (
          <Button size="xl" onClick={handleNavigate}>
            Learn more
          </Button>
        )}
      </Container>
    </MainWrapper>
  );
};
