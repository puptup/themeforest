import { BlogCard } from "@components/blog-card";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RelatedPostsWrapper, Title } from "./styled";

type RelatedPostsProps = {
  posts: BlogCardType[];
};

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  const { t, language } = useLocalization();
  const navigate = useNavigate();
  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.blog}/${id}`);
    },
    []
  );

  return (
    <RelatedPostsWrapper>
      <Title>{t("blogPost.relatedPosts")}</Title>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          card={post}
          lang={language}
          variant="secondary"
          handleLinkClick={handleLinkClick}
        />
      ))}
    </RelatedPostsWrapper>
  );
};
