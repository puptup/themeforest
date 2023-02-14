import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";
import { getServicePost } from "@utils/getServicePost";
import { useMemo } from "react";

import { ArticleGenerator } from "../article-generator";
import { SearchBar } from "../search-bar";
import { Services } from "../services";
import { Article, Container, PostWrapper } from "./styled";

type ServicePostSectionProps = {
  title: string;
};

export const ServicePostSection = ({ title }: ServicePostSectionProps) => {
  const { language } = useLocalization();

  const post = useMemo(() => getServicePost(title, language), [title, language]);

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
