import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { BlogPostSection } from "./components/blog-post-section";

export const BlogPostPage = () => {
  const { id } = useParams();
  const post = useMemo(() => blogCards.find((item) => item.id === id), [id]);

  if (!post) return <Navigate to={Links.blog} />;

  const { title } = post;

  return (
    <>
      <HeadSection
        variant="tertiary"
        pageName={title}
        title={title}
        additionalLink={Links.blog}
        additionalLinkName="Blog"
      />
      <BlogPostSection post={post} />
      <SubscribeSection />
    </>
  );
};
