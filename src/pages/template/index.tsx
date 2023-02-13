import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const TemplatePage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
