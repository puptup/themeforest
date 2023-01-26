import { Header } from "@modules/header";
import React from "react";
import { Outlet } from "react-router-dom";

export const TemplatePage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
