import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useTranslation } from "react-i18next";

import { BlogsSection } from "./components/blogs-section";

export const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeadSection
        variant="secondary"
        pageName={t("blog.pageName")}
        title={t("blog.pageTitle")}
        description={[t("blog.description")]}
      />
      <BlogsSection />
      <SubscribeSection />
    </>
  );
};
