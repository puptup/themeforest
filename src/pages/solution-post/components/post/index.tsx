import { ScrollIndicator } from "@components/scroll-indicator";
import { useMobile } from "@hooks/useMobile";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { getSolutionPost } from "@utils/getSolutionPost";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { ArticleGenerator } from "../article-generator";
import { Block, Container, PostWrapper } from "./styled";

type PostProps = {
  title: string;
};

export const Post = ({ title }: PostProps) => {
  const isMobile = useMobile();
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;
  const post = useMemo(() => getSolutionPost(title, lang), [title, lang]);
  const titles = useMemo(() => post.map((article) => article.title), [title, lang]);

  const [activeStep, setActiveStep] = useState(titles[0]);

  const handleStep = useCallback((item: string, status: boolean) => {
    if (status) {
      setActiveStep(item);
    }
  }, []);

  return (
    <MainWrapper>
      <Container>
        {!isMobile && <ScrollIndicator titles={titles} activeStep={activeStep} />}
        <PostWrapper>
          {post.map((article) => (
            <Block key={article.title}>
              <ArticleGenerator handleStep={handleStep} article={article} />
            </Block>
          ))}
        </PostWrapper>
      </Container>
    </MainWrapper>
  );
};
