import { Links } from "@constants/links";
import { membersCardsFull } from "@constants/membersFull";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ContactsSection } from "./components/contacts-section";
import { MemberSection } from "./components/member-section";

const tPath = "ourTeam.";

export const MemberPage = () => {
  const { id } = useParams();
  const { t, language } = useLocalization();

  const member = useMemo(
    () => membersCardsFull[language].filter((item) => item.id === id)[0],
    [id, language]
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
