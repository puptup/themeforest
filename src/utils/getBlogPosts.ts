import { blogCards } from "@constants/blogCards";
import { tags as constTags } from "@constants/tags";
import { Language } from "@localization";

export const getRelatedPosts = (activeTags: string[], lng: Language) => {
  const cards = blogCards[lng];
  if (!activeTags.length || activeTags.includes(constTags[lng][0])) return cards.slice(0, 3);
  console.log(activeTags);
  return cards
    .filter(({ tags }) => [...new Set([...tags, ...activeTags])].length === 2)
    .slice(0, 3);
};

export const getPopularPosts = (tagName: string, lng: Language) => {
  return blogCards[lng]
    .filter((elem) => elem.tags.map((tag) => tag.toLowerCase()).includes(tagName.toLowerCase()))
    .sort((a, b) => a.views - b.views)
    .slice(0, 4);
};
