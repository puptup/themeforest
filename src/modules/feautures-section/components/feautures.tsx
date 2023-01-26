import img1 from "@assets/img_1.png";
import React from "react";

import { FullSizeIMG } from "../styled";
import { AnaliticsPlatformSection } from "./analitics-platform-section";
import { FindTruePowerSection } from "./find-true-power-section";
import { NewSolutionsSection } from "./new-solutions-sections";

export const FeauturesSection = () => {
  return (
    <>
      <FindTruePowerSection />
      <FullSizeIMG src={img1} />
      <AnaliticsPlatformSection />
      <NewSolutionsSection />
    </>
  );
};
