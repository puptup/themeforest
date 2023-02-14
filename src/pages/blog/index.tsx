import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";

import { BlogsSection } from "./components/blogs-section";

export const BlogPage = () => {
  const { t } = useLocalization();
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
