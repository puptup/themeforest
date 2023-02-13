import { RelatedPost } from "@components/related-post-card";
import { BlogCardType } from "@types";
import styled from "styled-components";

type RelatedPostsProps = {
  posts: BlogCardType[];
};

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h4};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;

export const RelatedPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
`;

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <RelatedPostsWrapper>
      <Title>Related Posts</Title>
      {posts.map((post) => (
        <RelatedPost key={post.id} post={post} />
      ))}
    </RelatedPostsWrapper>
  );
};
