import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Spinner } from "./components/spinner";

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
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
