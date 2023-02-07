import { AboutUsPage } from "@pages/about-us";
import { ContactsPage } from "@pages/contacts";
import { HomePage } from "@pages/home";
import { OurTeamPage } from "@pages/our-team";
import { Service } from "@pages/service";
import { ServicesPage } from "@pages/services";
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
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);
