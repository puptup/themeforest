import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { NeedHelpSection } from "@modules/need-help-section";
import { ChooseUsSection } from "@pages/solutions/components/choose-us-section";
import { SolutionsSection } from "@pages/solutions/components/solutions-section";
import { TestimonialsSection } from "@pages/solutions/components/testimonials-section";

const tPath = "solutions.";

export const SolutionsPage = () => {
  const { t } = useLocalization();

  return (
    <>
      <HeadSection
        variant="primary"
        pageName={t(`${tPath}pageName`)}
        title={t(`${tPath}pageTitle`)}
        description={t(`${tPath}pageDescription`)}
      />
      <SolutionsSection />
      <ChooseUsSection />
      <TestimonialsSection />
      <NeedHelpSection />
    </>
  );
};
