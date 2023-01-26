import { HomePage } from "@pages/home";
import { TemplatePage } from "@pages/template";
import React from "react";
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
    ],
  },
]);
