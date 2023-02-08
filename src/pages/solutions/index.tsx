import { HeadSection } from "@modules/head-section";
import { NeedHelpSection } from "@modules/need-help-section";
import { ChooseUsSection } from "@pages/solutions/components/choose-us-section";
import { SolutionsSection } from "@pages/solutions/components/solutions-section";
import { TestimonialsSection } from "@pages/solutions/components/testimonials-section";

export const SolutionsPage = () => {
  return (
    <>
      <HeadSection
        variant="primary"
        pageName="Solutions"
        title="Data analitics solutions"
        description="Getting ready for your success, we provide truly outstanding IT solutions."
      />
      <SolutionsSection />
      <ChooseUsSection />
      <TestimonialsSection />
      <NeedHelpSection />
    </>
  );
};
