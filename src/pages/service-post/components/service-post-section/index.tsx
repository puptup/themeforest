import { device } from "@constants/devices";
import { getServicePost } from "@constants/posts/servicePost";
import { MainWrapper } from "@ui/main-wrapper";
import { useMemo } from "react";
import styled from "styled-components";

import { ArticleGenerator } from "../article-generator";
import { SearchBar } from "../search-bar";
import { Services } from "../services";

type ServicePostSectionProps = {
  title: string;
};

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 635px;
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.betweenSections.xxxl} 0;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const ServicePostSection = ({ title }: ServicePostSectionProps) => {
  const post = useMemo(() => getServicePost(title), [title]);

  return (
    <MainWrapper>
      <Container>
        <PostWrapper>
          {post.map((article) => (
            <Article key={article.title}>
              <ArticleGenerator article={article} />
            </Article>
          ))}
        </PostWrapper>
        <div>
          <SearchBar />
          <Services />
        </div>
      </Container>
    </MainWrapper>
  );
};
