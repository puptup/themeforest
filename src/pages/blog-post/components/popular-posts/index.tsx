import { PopularPost } from "@components/popular-post-card";
import { BlogCardType } from "@types";

import { PopularPostsWrapper, Title } from "./styled";

type PopularPostsProps = {
  posts: BlogCardType[];
};

export const PopularPosts = ({ posts }: PopularPostsProps) => {
  return (
    <PopularPostsWrapper>
      <Title>Popular posts</Title>
      {posts.map((post) => (
        <PopularPost key={post.id} post={post} />
      ))}
    </PopularPostsWrapper>
  );
};
