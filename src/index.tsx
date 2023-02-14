import "@localization";

import { router } from "@router";
import { theme } from "@theme";
import { GlobalStyle } from "@theme/global-style";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </ThemeProvider>
);
