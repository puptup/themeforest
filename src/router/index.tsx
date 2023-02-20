/* eslint-disable @typescript-eslint/no-shadow */
import { Links } from "@constants/links";
import { TemplatePage } from "@pages/template";
import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";

const { Service } = lazily(() => import("@pages/service-post"));
const { ServicesPage } = lazily(() => import("@pages/services"));
const { SolutionPage } = lazily(() => import("@pages/solution-post"));
const { SolutionsPage } = lazily(() => import("@pages/solutions"));
const { AboutUsPage } = lazily(() => import("@pages/about-us"));
const { BlogPage } = lazily(() => import("@pages/blog"));
const { BlogPostPage } = lazily(() => import("@pages/blog-post"));
const { ContactsPage } = lazily(() => import("@pages/contacts"));
const { FAQSPage } = lazily(() => import("@pages/faqs"));
const { HomePage } = lazily(() => import("@pages/home"));
const { MemberPage } = lazily(() => import("@pages/member"));
const { OurTeamPage } = lazily(() => import("@pages/our-team"));

export const router = createBrowserRouter([
  {
    path: Links.home,
    element: <TemplatePage />,
    children: [
      {
        path: Links.home,
        element: <HomePage />,
      },
      {
        path: Links.services,
        element: <ServicesPage />,
      },
      {
        path: `${Links.services}/:id`,
        element: <Service />,
      },
      {
        path: Links.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: Links.contacts,
        element: <ContactsPage />,
      },
      {
        path: Links.ourTeam,
        element: <OurTeamPage />,
      },
      {
        path: `${Links.ourTeam}/:id`,
        element: <MemberPage />,
      },
      {
        path: Links.faq,
        element: <FAQSPage />,
      },
      {
        path: Links.solutions,
        element: <SolutionsPage />,
      },
      {
        path: `${Links.solutions}/:id`,
        element: <SolutionPage />,
      },
      {
        path: Links.blog,
        element: <BlogPage />,
      },
      {
        path: `${Links.blog}/:id`,
        element: <BlogPostPage />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);
