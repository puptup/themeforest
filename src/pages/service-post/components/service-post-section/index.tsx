import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { getServicePost } from "@utils/getServicePost";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleGenerator } from "../article-generator";
import { SearchBar } from "../search-bar";
import { Services } from "../services";
import { Article, Container, PostWrapper } from "./styled";

type ServicePostSectionProps = {
  title: string;
};

export const ServicePostSection = ({ title }: ServicePostSectionProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;
  const post = useMemo(() => getServicePost(title, lang), [title, lang]);

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
