import { SolutionCard } from "@components/solution-card";
import { solutionsCards } from "@constants/solutions";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";

import { SolutionsContainer } from "./styled";

export const SolutionsSection = () => {
  const { language } = useLocalization();

  const cards = solutionsCards[language];

  return (
    <MainWrapper>
      <SolutionsContainer>
        {cards.map(({ id, title, icon, description }) => (
          <SolutionCard
            key={id}
            id={id}
            title={title}
            icon={icon}
            description={description}
            lng={language}
          />
        ))}
      </SolutionsContainer>
    </MainWrapper>
  );
};
