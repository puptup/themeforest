import { RelatedPost } from "@components/related-post-card";
import { BlogCardType } from "@types";
import { useTranslation } from "react-i18next";

import { RelatedPostsWrapper, Title } from "./styled";

type RelatedPostsProps = {
  posts: BlogCardType[];
};

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  const { t } = useTranslation();

  return (
    <RelatedPostsWrapper>
      <Title>{t("blogPost.relatedPosts")}</Title>
      {posts.map((post) => (
        <RelatedPost key={post.id} post={post} />
      ))}
    </RelatedPostsWrapper>
  );
};
