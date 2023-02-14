import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { BlogPostSection } from "./components/blog-post-section";

export const BlogPostPage = () => {
  const { id } = useParams();
  const { t, language } = useLocalization();

  const post = useMemo(() => blogCards[language].find((item) => item.id === id), [id, language]);

  if (!post) return <Navigate to={Links.blog} />;

  const { title } = post;

  return (
    <>
      <HeadSection
        variant="tertiary"
        pageName={title}
        title={title}
        additionalLink={Links.blog}
        additionalLinkName={t("mainLinks.blog") as string}
      />
      <BlogPostSection post={post} />
      <SubscribeSection />
    </>
  );
};
