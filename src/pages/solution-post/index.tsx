import { Links } from "@constants/links";
import { solutionsCards } from "@constants/solutions";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { NeedHelpSection } from "@modules/need-help-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Post } from "./components/post";

export const SolutionPage = () => {
  const { id } = useParams();
  const { language } = useLocalization();

  const card = useMemo(
    () => solutionsCards[language].find((item) => item.id === id),
    [id, language]
  );
  if (!card) return <Navigate to={Links.solutions} />;

  const { title } = card;

  return (
    <>
      <HeadSection variant="tertiary" pageName={title} title={title} />
      <Post title={title} />
      <NeedHelpSection />
      <SubscribeSection />
    </>
  );
};
