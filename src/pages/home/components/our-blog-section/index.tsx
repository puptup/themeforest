import { BlogCard } from "@components/blog-card";
import { Carousel } from "@components/carousel";
import { blogCards } from "@constants/blogCards";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";

import { Button, CardsWrapper, Container, Title } from "./styled";

export const OurBlogSection = () => {
  const isMobile = useMobile();

  return (
    <MainWrapper>
      <Container>
        {!isMobile ? (
          <Carousel title="Our blog" slidesPerView={3}>
            {blogCards.map((card) => {
              const { id } = card;
              return <BlogCard key={id} card={card} />;
            })}
          </Carousel>
        ) : (
          <>
            <Title>Our blog</Title>
            <CardsWrapper>
              {blogCards.map((card) => {
                const { id } = card;
                return <BlogCard key={id} card={card} variant="without-description" />;
              })}
            </CardsWrapper>
            <Button size="xl">Learn more</Button>
          </>
        )}
      </Container>
    </MainWrapper>
  );
};
