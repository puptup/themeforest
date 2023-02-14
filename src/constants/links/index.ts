export enum Links {
  home = "/",
  solutions = "/solutions",
  aboutUs = "/about-us",
  ourTeam = "/our-team",
  services = "/services",
  blog = "/blog",
  contacts = "/contacts",
  faq = "/faq",
}

export const mainLinks = [
  {
    path: Links.home,
    title: "mainLinks.home",
  },
  {
    path: Links.solutions,
    title: "mainLinks.solutions",
  },
  {
    path: Links.aboutUs,
    title: "mainLinks.aboutUs",
  },
  {
    path: Links.ourTeam,
    title: "mainLinks.ourTeam",
  },
  {
    path: Links.services,
    title: "mainLinks.services",
  },
  {
    path: Links.blog,
    title: "mainLinks.blog",
  },
  {
    path: Links.contacts,
    title: "mainLinks.contacts",
  },
];

export const quickLinks = [
  ...mainLinks,
  {
    path: Links.faq,
    title: "mainLinks.faq",
  },
];

export const serviceLinks = [
  {
    path: "/pages",
    title: "serviceLinks.pages",
  },
  {
    path: "/elements",
    title: "serviceLinks.elements",
  },
  {
    path: "/pricing",
    title: "serviceLinks.pricing",
  },
  {
    path: "/site-map",
    title: "serviceLinks.siteMap",
  },
];

export const mobileHeaderLinks = [
  {
    title: "mainLinks.home",
    values: [
      {
        path: Links.home,
        title: "mainLinks.home",
      },
      {
        path: Links.home,
        title: "mainLinks.home",
      },
      {
        path: Links.home,
        title: "mainLinks.home",
      },
    ],
  },
  {
    title: "mainLinks.solutions",
    values: [
      {
        path: `${Links.solutions}/data-integration`,
        title: "header.solutionsLinks.dataIntegration",
      },
      {
        path: `${Links.solutions}/data-visualization`,
        title: "header.solutionsLinks.dataVizualization",
      },
      {
        path: `${Links.solutions}/big-data`,
        title: "header.solutionsLinks.bigData",
      },
    ],
  },
  {
    title: "serviceLinks.pages",
    values: [
      {
        path: Links.aboutUs,
        title: "mainLinks.aboutUs",
      },
      {
        path: Links.faq,
        title: "mainLinks.faq",
      },
      {
        path: Links.ourTeam,
        title: "mainLinks.ourTeam",
      },
      {
        path: Links.services,
        title: "mainLinks.services",
      },
      {
        path: Links.solutions,
        title: "mainLinks.solutions",
      },
      {
        path: Links.blog,
        title: "mainLinks.blog",
      },
      {
        path: Links.contacts,
        title: "mainLinks.contacts",
      },
    ],
  },
];
