import { RelatedPost } from "@components/related-post-card";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";

import { RelatedPostsWrapper, Title } from "./styled";

type RelatedPostsProps = {
  posts: BlogCardType[];
};

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  const { t } = useLocalization();

  return (
    <RelatedPostsWrapper>
      <Title>{t("blogPost.relatedPosts")}</Title>
      {posts.map((post) => (
        <RelatedPost key={post.id} post={post} />
      ))}
    </RelatedPostsWrapper>
  );
};
