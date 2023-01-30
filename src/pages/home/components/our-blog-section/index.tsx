import { BlogCard } from "@components/blog-card";
import { Carousel } from "@components/carousel";
import { blogCards } from "@constants/blogCards";
import { MainWrapper } from "@ui/main-wrapper";
import React from "react";
import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.betweenSections.xxxl};
`;

export const OurBlogSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Carousel title="Our blog" slidesPerView={3}>
          {blogCards.map((card) => {
            const { id } = card;
            return <BlogCard key={id} card={card} />;
          })}
        </Carousel>
      </Container>
    </MainWrapper>
  );
};
