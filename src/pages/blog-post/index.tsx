import { blogCards } from "@constants/blogCards";
import { Links } from "@constants/links";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import { BlogPostSection } from "./components/blog-post-section";

export const BlogPostPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;
  const post = useMemo(() => blogCards[lang].find((item) => item.id === id), [id, lang]);

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
