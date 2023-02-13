import { ScrollIndicator } from "@components/scroll-indicator";
import { getSolutionPost } from "@constants/posts/solutionPost";
import { useMobile } from "@hooks/useMobile";
import { MainWrapper } from "@ui/main-wrapper";
import { useCallback, useMemo, useState } from "react";

import { ArticleGenerator } from "../article-generator";
import { Block, Container, PostWrapper } from "./styled";

type PostProps = {
  title: string;
};

export const Post = ({ title }: PostProps) => {
  const isMobile = useMobile();
  const post = useMemo(() => getSolutionPost(title), [title]);
  const titles = useMemo(() => post.map((article) => article.title), [title]);

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
