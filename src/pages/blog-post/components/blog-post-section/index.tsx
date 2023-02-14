import { useMobile } from "@hooks/useMobile";
import { Language } from "@localization";
import { BlogCardType } from "@types";
import { MainWrapper } from "@ui/main-wrapper";
import { getPopularPosts, getRelatedPosts } from "@utils/getBlogPosts";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;

  useEffect(() => {
    if (tag !== AllTopics) {
      setTag(AllTopics);
    }
  }, [post.id]);

  const popularPosts = useMemo(() => {
    return getPopularPosts(searchString || post.tags[0], lang);
  }, [post.id, searchString, lang]);

  const relatedPosts = useMemo(
    () => getRelatedPosts(tag === AllTopics ? post.tags[0] : tag, lang),
    [post.id, tag, lang]
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
