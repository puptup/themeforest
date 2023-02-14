import { blogCards } from "@constants/blogCards";
import { Language } from "@localization";

export const getRelatedPosts = (tag: string, lng: Language) => {
  return blogCards[lng].filter((elem) => elem.tags.includes(tag)).slice(0, 3);
};

export const getPopularPosts = (tagName: string, lng: Language) => {
  return blogCards[lng]
    .filter((elem) => elem.tags.map((tag) => tag.toLowerCase()).includes(tagName.toLowerCase()))
    .sort((a, b) => a.views - b.views)
    .slice(0, 4);
};
