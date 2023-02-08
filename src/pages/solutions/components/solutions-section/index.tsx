import { SolutionCard } from "@components/solution-card";
import { solutionsCards } from "@constants/solutions";
import { MainWrapper } from "@ui/main-wrapper";

import { SolutionsContainer } from "./styled";

export const SolutionsSection = () => {
  return (
    <MainWrapper>
      <SolutionsContainer>
        {solutionsCards.map(({ id, title, icon, description }) => (
          <SolutionCard key={id} id={id} title={title} icon={icon} description={description} />
        ))}
      </SolutionsContainer>
    </MainWrapper>
  );
};
