import { Links } from "@constants/links";
import { solutionsCards } from "@constants/solutions";
import { HeadSection } from "@modules/head-section";
import { NeedHelpSection } from "@modules/need-help-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Post } from "./components/post";

export const SolutionPage = () => {
  const { id } = useParams();

  const card = useMemo(() => solutionsCards.find((item) => item.id === id), [id]);
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
