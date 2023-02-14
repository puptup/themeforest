import { PopularPost } from "@components/popular-post-card";
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
        <PopularPost key={post.id} post={post} lng={language} />
      ))}
    </PopularPostsWrapper>
  );
};
