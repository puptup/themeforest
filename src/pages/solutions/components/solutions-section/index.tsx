import { SolutionCard } from "@components/solution-card";
import { solutionsCards } from "@constants/solutions";
import { Language } from "@localization";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { SolutionsContainer } from "./styled";

export const SolutionsSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;
  const cards = solutionsCards[lang];

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
            lng={lang}
          />
        ))}
      </SolutionsContainer>
    </MainWrapper>
  );
};
