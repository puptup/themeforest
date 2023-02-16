import { BlogCard } from "@components/blog-card";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";

import { RelatedPostsWrapper, Title } from "./styled";

type RelatedPostsProps = {
  posts: BlogCardType[];
};

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  const { t, language } = useLocalization();

  return (
    <RelatedPostsWrapper>
      <Title>{t("blogPost.relatedPosts")}</Title>
      {posts.map((post) => (
        <BlogCard key={post.id} card={post} lang={language} variant="secondary" />
      ))}
    </RelatedPostsWrapper>
  );
};
