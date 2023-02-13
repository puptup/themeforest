import { Links } from "@constants/links";
import { membersCardsFull } from "@constants/membersFull";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ContactsSection } from "./components/contacts-section";
import { MemberSection } from "./components/member-section";

export const MemberPage = () => {
  const { id } = useParams();
  const member = useMemo(() => membersCardsFull.filter((item) => item.id === id)[0], [id]);

  if (!member) return <Navigate to={`${Links.ourTeam}`} />;

  return (
    <>
      <HeadSection
        variant="tertiary"
        pageName={member.name}
        title={member.name}
        additionalLink={Links.ourTeam}
        additionalLinkName="Our team"
      />
      <MemberSection member={member} />
      <ContactsSection name={member.name} />
      <SubscribeSection />
    </>
  );
};
