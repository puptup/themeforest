import Img1 from "@assets/img_0012.png";
import Img2 from "@assets/img_14.png";
import { Language } from "@localization";
import { ArticleBlockType } from "@types";

export const getSolutionPost = (title: string, lng: Language): ArticleBlockType[] => {
  const post = {
    en: [
      {
        title: `What is ${title.toLowerCase()}?`,
        description:
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. ",
      },
      {
        title: `Types of ${title.toLowerCase()}`,
        image: Img1,
        description:
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu: ",
        list: [
          "Symbol maps — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
          "Line charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam.",
          "Pie charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna.",
          "Tables — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl.",
          "Histograms — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor.",
          "Scatter plots — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
        ],
      },
      {
        title: `${title} practices`,
        image: Img2,
        description: [
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
          "Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.",
        ],
      },
      {
        title: `${title} in Ensome`,
        description: [
          "Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae.",
          "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ultrices eros, vel sollicitudin arcu fringilla quis.",
          "Vestibulum porttitor euismod sagittis. Pellentesque scelerisque purus nisi, ac convallis neque bibendum eget. Pellentesque augue nunc, ullamcorper vel sollicitudin sed, auctor nec libero. ",
        ],
      },
    ],

    ru: [
      {
        title: `What is ${title.toLowerCase()}?`,
        description:
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. ",
      },
      {
        title: `Types of ${title.toLowerCase()}`,
        image: Img1,
        description:
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu: ",
        list: [
          "Symbol maps — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
          "Line charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam.",
          "Pie charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna.",
          "Tables — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl.",
          "Histograms — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor.",
          "Scatter plots — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
        ],
      },
      {
        title: `${title} practices`,
        image: Img2,
        description: [
          "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
          "Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.",
        ],
      },
      {
        title: `${title} in Ensome`,
        description: [
          "Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae.",
          "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ultrices eros, vel sollicitudin arcu fringilla quis.",
          "Vestibulum porttitor euismod sagittis. Pellentesque scelerisque purus nisi, ac convallis neque bibendum eget. Pellentesque augue nunc, ullamcorper vel sollicitudin sed, auctor nec libero. ",
        ],
      },
    ],
  };

  return post[lng];
};
