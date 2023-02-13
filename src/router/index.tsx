import { Links } from "@constants/links";
import { AboutUsPage } from "@pages/about-us";
import { BlogPage } from "@pages/blog";
import { BlogPostPage } from "@pages/blog-post";
import { ContactsPage } from "@pages/contacts";
import { FAQSPage } from "@pages/faqs";
import { HomePage } from "@pages/home";
import { MemberPage } from "@pages/member";
import { OurTeamPage } from "@pages/our-team";
import { Service } from "@pages/service-post";
import { ServicesPage } from "@pages/services";
import { SolutionPage } from "@pages/solution-post";
import { SolutionsPage } from "@pages/solutions";
import { TemplatePage } from "@pages/template";
import { createBrowserRouter } from "react-router-dom";

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
