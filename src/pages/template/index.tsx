import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const TemplatePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
