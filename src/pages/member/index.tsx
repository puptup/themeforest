import { Links } from "@constants/links";
import { membersCardsFull } from "@constants/membersFull";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import { ContactsSection } from "./components/contacts-section";
import { MemberSection } from "./components/member-section";

const tPath = "ourTeam.";

export const MemberPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;
  const member = useMemo(
    () => membersCardsFull[lang].filter((item) => item.id === id)[0],
    [id, lang]
  );

  if (!member) return <Navigate to={`${Links.ourTeam}`} />;
  const { name } = member;
  return (
    <>
      <HeadSection
        variant="tertiary"
        pageName={name}
        title={name}
        additionalLink={Links.ourTeam}
        additionalLinkName={t(`${tPath}pageName`) as string}
      />
      <MemberSection member={member} />
      <ContactsSection name={name} />
      <SubscribeSection />
    </>
  );
};
