import { BlogCard } from "@components/blog-card/";
import { useLocalization } from "@hooks/useLocalization";
import { BlogCardType } from "@types";

import { PopularPostsWrapper, Title } from "./styled";

type PopularPostsProps = {
  posts: BlogCardType[];
};

export const PopularPosts = ({ posts }: PopularPostsProps) => {
  const { t, language } = useLocalization();

  return (
    <PopularPostsWrapper>
      <Title>{t("blogPost.popularPosts")}</Title>
      {posts.map((post) => (
        <BlogCard key={post.id} card={post} lang={language} variant="tertiary" />
      ))}
    </PopularPostsWrapper>
  );
};
