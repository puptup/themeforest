import { Links } from "@constants/links";
import { serviceCards } from "@constants/serviceCards";
import { HeadSection } from "@modules/head-section";
import { SubscribeSection } from "@modules/subscribe";
import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ContactInformationSection } from "./components/contact-information-section";
import { ServicePostSection } from "./components/service-post-section";

export const Service = () => {
  const { id } = useParams();

  const post = useMemo(() => serviceCards.find((item) => item.id === id), [id]);

  if (!post) return <Navigate to={Links.services} />;

  const { title } = post;

  return (
    <>
      <HeadSection
        variant="secondary"
        pageName={title}
        title={title}
        description={[
          "Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa.",
        ]}
      />
      <ServicePostSection title={title} />
      <ContactInformationSection />
      <SubscribeSection />
    </>
  );
};
