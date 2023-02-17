import { tags } from "@constants/tags";
import { useLocalization } from "@hooks/useLocalization";
import { useMobile } from "@hooks/useMobile";
import { BlogCardType } from "@types";
import { getPopularPosts, getRelatedPosts } from "@utils/getBlogPosts";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MainWrapper } from "tmfcomponents";

import { Categories } from "../categories";
import { PopularPosts } from "../popular-posts";
import { Post } from "../post";
import { RelatedPosts } from "../related-posts";
import { SearchBar } from "../search-posts";
import { Tags } from "../tags";
import { Container, LeftBlock, RightBlock } from "./styled";

type BlogPostSectionProps = {
  post: BlogCardType;
};

export const BlogPostSection = ({ post }: BlogPostSectionProps) => {
  const isMobile = useMobile();
  const [searchString, setSearchString] = useState("");
  const { language } = useLocalization();
  const [activeTags, setActiveTags] = useState<string[]>([tags[language][0]]);

  useEffect(() => {
    if (!activeTags.includes(tags[language][0])) {
      setActiveTags([tags[language][0]]);
    }
  }, [post.id, language]);

  const popularPosts = useMemo(() => {
    return getPopularPosts(searchString || post.tags[0], language);
  }, [post.id, searchString, language]);

  const relatedPosts = useMemo(
    () => getRelatedPosts(activeTags, language),
    [post.id, activeTags, language]
  );

  const handleTag = useCallback(
    (newTag: string) => () => {
      setActiveTags((prev) => {
        if (prev.includes(newTag)) {
          return prev.filter((el) => el !== newTag);
        }

        if (prev.length >= 2) return prev;
        return [...prev, newTag];
      });
    },
    []
  );

  const handlePopularPosts = useCallback((str: string) => {
    setSearchString(str);
  }, []);

  return (
    <MainWrapper>
      <Container>
        <LeftBlock>
          <Post post={post} />
          <RelatedPosts posts={relatedPosts} />
        </LeftBlock>
        {!isMobile && (
          <RightBlock>
            <SearchBar handleSearch={handlePopularPosts} />
            <PopularPosts posts={popularPosts} />
            <Categories />
            <Tags activeTags={activeTags} handleTag={handleTag} />
          </RightBlock>
        )}
      </Container>
    </MainWrapper>
  );
};
