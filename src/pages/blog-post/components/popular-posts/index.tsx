import { BlogCard } from "@components/blog-card/";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PopularPostsWrapper, Title } from "./styled";

type PopularPostsProps = {
  posts: BlogCardType[];
};

export const PopularPosts = ({ posts }: PopularPostsProps) => {
  const { t, language } = useLocalization();
  const navigate = useNavigate();
  const handleLinkClick = useCallback(
    (id: string) => () => {
      navigate(`${Links.blog}/${id}`);
    },
    []
  );

  return (
    <PopularPostsWrapper>
      <Title>{t("blogPost.popularPosts")}</Title>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          card={post}
          lang={language}
          variant="tertiary"
          handleLinkClick={handleLinkClick}
        />
      ))}
    </PopularPostsWrapper>
  );
};
