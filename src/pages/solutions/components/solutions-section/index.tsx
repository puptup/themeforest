import { SolutionCard } from "@components/solution-card";
import { Links } from "@constants/links";
import { solutionsCards } from "@constants/solutions";
import { useLocalization } from "@hooks/useLocalization";
import { MainWrapper } from "@ui/main-wrapper";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SolutionsContainer } from "./styled";

export const SolutionsSection = () => {
  const { language } = useLocalization();
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (id: string) => () => {
      navigate(`${Links.solutions}/${id}`);
    },
    []
  );

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
            handleLinkClick={handleNavigate}
          />
        ))}
      </SolutionsContainer>
    </MainWrapper>
  );
};
