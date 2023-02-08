import { AboutUsPage } from "@pages/about-us";
import { BlogPage } from "@pages/blog";
import { ContactsPage } from "@pages/contacts";
import { FAQSPage } from "@pages/faqs";
import { HomePage } from "@pages/home";
import { MemberPage } from "@pages/member";
import { OurTeamPage } from "@pages/our-team";
import { Service } from "@pages/service";
import { ServicesPage } from "@pages/services";
import { SolutionsPage } from "@pages/solutions";
import { TemplatePage } from "@pages/template";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatePage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/our-team",
        element: <OurTeamPage />,
      },
      {
        path: "/our-team/:id",
        element: <MemberPage />,
      },
      {
        path: "/faq",
        element: <FAQSPage />,
      },
      {
        path: "/solutions",
        element: <SolutionsPage />,
      },
      {
        path: "/solutions/:id",
        element: <div />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog",
        element: <div />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);
