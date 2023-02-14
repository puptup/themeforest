import { Links } from "@constants/links";
import { solutionsCards } from "@constants/solutions";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { NeedHelpSection } from "@modules/need-help-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import { Post } from "./components/post";

export const SolutionPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;
  const card = useMemo(() => solutionsCards[lang].find((item) => item.id === id), [id, lang]);
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
