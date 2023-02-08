import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";

import { BlogsSection } from "./components/blogs-section";

export const BlogPage = () => {
  return (
    <>
      <HeadSection
        variant="secondary"
        pageName="Blog"
        title="Blog"
        description={[
          "Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa.",
        ]}
      />
      <BlogsSection />
      <SubscribeSection />
    </>
  );
};
