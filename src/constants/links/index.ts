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
    title: "Home",
  },
  {
    path: Links.solutions,
    title: "Solutions",
  },
  {
    path: Links.aboutUs,
    title: "About us",
  },
  {
    path: Links.ourTeam,
    title: "Our team",
  },
  {
    path: Links.services,
    title: "Services",
  },
  {
    path: Links.blog,
    title: "Blog",
  },
  {
    path: Links.contacts,
    title: "Contacts",
  },
];

export const quickLinks = [
  ...mainLinks,
  {
    path: Links.faq,
    title: "FAQ",
  },
];

export const serviceLinks = [
  {
    path: "/pages",
    title: "Pages",
  },
  {
    path: "/elements",
    title: "Elements",
  },
  {
    path: "/pricing",
    title: "Pricing",
  },
  {
    path: "/site-map",
    title: "Site map",
  },
];

export const mobileHeaderLinks = [
  {
    title: "Home",
    values: [
      {
        path: Links.home,
        title: "Home 1",
      },
      {
        path: Links.home,
        title: "Home 2",
      },
      {
        path: Links.home,
        title: "Home 3",
      },
    ],
  },
  {
    title: "Solutions",
    values: [
      {
        path: `${Links.solutions}/data-integration`,
        title: "Data integration",
      },
      {
        path: `${Links.solutions}/data-visualization`,
        title: "Data visualization",
      },
      {
        path: `${Links.solutions}/big-data`,
        title: "Big data",
      },
    ],
  },
  {
    title: "Pages",
    values: [
      {
        path: Links.aboutUs,
        title: "About us",
      },
      {
        path: Links.faq,
        title: "FAQ",
      },
      {
        path: Links.ourTeam,
        title: "Our team",
      },
      {
        path: Links.services,
        title: "Services",
      },
      {
        path: Links.solutions,
        title: "Solutions",
      },
      {
        path: Links.blog,
        title: "Blog",
      },
      {
        path: Links.contacts,
        title: "Contacts",
      },
    ],
  },
];
