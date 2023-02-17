import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { getSolutionPost } from "@utils/getSolutionPost";
import { useCallback, useMemo, useState } from "react";
import { MainWrapper, ScrollIndicator } from "tmfcomponents";

import { ArticleGenerator } from "../article-generator";
import { Block, Container, PostWrapper } from "./styled";

type PostProps = {
  title: string;
};

export const Post = ({ title }: PostProps) => {
  const isMobile = useMobile();
  const { language } = useLocalization();

  const post = useMemo(() => getSolutionPost(title, language), [title, language]);
  const titles = useMemo(() => post.map((article) => article.title), [title, language]);

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
