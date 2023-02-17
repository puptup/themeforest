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

const AllTopics = "All topics";

export const BlogPostSection = ({ post }: BlogPostSectionProps) => {
  const isMobile = useMobile();
  const [tag, setTag] = useState<string>(AllTopics);
  const [searchString, setSearchString] = useState("");
  const { language } = useLocalization();

  useEffect(() => {
    if (tag !== AllTopics) {
      setTag(AllTopics);
    }
  }, [post.id]);

  const popularPosts = useMemo(() => {
    return getPopularPosts(searchString || post.tags[0], language);
  }, [post.id, searchString, language]);

  const relatedPosts = useMemo(
    () => getRelatedPosts(tag === AllTopics ? post.tags[0] : tag, language),
    [post.id, tag, language]
  );

  const handleTag = useCallback(
    (newTag: string) => () => {
      setTag(newTag);
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
            <Tags activeTag={tag} handleTag={handleTag} />
          </RightBlock>
        )}
      </Container>
    </MainWrapper>
  );
};
