import { PopularPost } from "@components/popular-post-card";
import { Language } from "@localization";
import { BlogCardType } from "@types";
import { useTranslation } from "react-i18next";

import { PopularPostsWrapper, Title } from "./styled";

type PopularPostsProps = {
  posts: BlogCardType[];
};

export const PopularPosts = ({ posts }: PopularPostsProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <PopularPostsWrapper>
      <Title>{t("blogPost.popularPosts")}</Title>
      {posts.map((post) => (
        <PopularPost key={post.id} post={post} lng={lang} />
      ))}
    </PopularPostsWrapper>
  );
};
