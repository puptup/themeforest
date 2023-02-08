// primary faqs, solutions , services
// secondary our-team,
// tertiary blog, about-us

import { PrimaryVariant, PrimaryVariantProps } from "./variants/primary";
import { SecondaryVariant, SecondaryVariantProps } from "./variants/secondary";
import { TertiaryVariant, TertiaryVariantProps } from "./variants/tertiary";

type HeadSectionProps = PrimaryVariantProps | SecondaryVariantProps | TertiaryVariantProps;

export const HeadSection = (props: HeadSectionProps) => {
  const { variant } = props;
  switch (variant) {
    case "primary": {
      const { pageName, title, description } = props;
      return <PrimaryVariant pageName={pageName} title={title} description={description} />;
    }
    case "secondary": {
      const { pageName, title, description } = props;
      return <SecondaryVariant pageName={pageName} title={title} description={description} />;
    }

    case "tertiary": {
      const { pageName, title, additionalLink, additionalLinkName } = props;
      return (
        <TertiaryVariant
          pageName={pageName}
          title={title}
          additionalLink={additionalLink}
          additionalLinkName={additionalLinkName}
        />
      );
    }

    default: {
      return null;
    }
  }
};
