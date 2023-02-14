import { Links } from "@constants/links";
import { serviceCards } from "@constants/serviceCards";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import { ContactInformationSection } from "./components/contact-information-section";
import { ServicePostSection } from "./components/service-post-section";

const tPath = "servicePost.";

export const Service = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;
  const post = useMemo(() => serviceCards[lang].find((item) => item.id === id), [id, lang]);

  if (!post) return <Navigate to={Links.services} />;

  const { title } = post;

  return (
    <>
      <HeadSection
        variant="secondary"
        pageName={title}
        title={title}
        description={[t(`${tPath}description`)]}
      />
      <ServicePostSection title={title} />
      <ContactInformationSection />
      <SubscribeSection />
    </>
  );
};
