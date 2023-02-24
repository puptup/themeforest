import { questions as questionsGroups } from "@constants/questions";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { useCallback, useState } from "react";
import { MainWrapper } from "tmfcomponents";

import { QuestionContainer } from "../questions-container";
import { QuestionsGroupsWrapper } from "./styled";

const tPath = "faqs.";

export const FaqsSection = () => {
  const { t, language } = useLocalization();
  const [activeQuestion, setActiveQuestion] = useState("");

  const handleActive = useCallback(
    (question: string) => () => {
      setActiveQuestion(question);
    },
    []
  );

  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName={t(`${tPath}pageName`)}
        title={t(`${tPath}pageTitle`)}
        description={t(`${tPath}description`)}
      />
      <QuestionsGroupsWrapper>
        {questionsGroups.map((block) => {
          const { title, questions } = block[language];
          return (
            <QuestionContainer
              key={title}
              title={title}
              questions={questions}
              activeQuestion={activeQuestion}
              handleActive={handleActive}
            />
          );
        })}
      </QuestionsGroupsWrapper>
    </MainWrapper>
  );
};
