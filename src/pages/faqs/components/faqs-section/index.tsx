import { QuestionCard } from "@components/question-card";
import { questions } from "@constants/questions";
import { useLocalization } from "@hooks/useLocalization";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";

import { QuestionsContainer } from "./styled";

const tPath = "faqs.";

export const FaqsSection = () => {
  const { t, language } = useLocalization();

  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName={t(`${tPath}pageName`)}
        title={t(`${tPath}pageTitle`)}
        description={t(`${tPath}description`)}
      />
      <QuestionsContainer>
        {questions[language].map(({ question, answer }, index) => (
          <QuestionCard question={question} answer={answer} key={index} />
        ))}
      </QuestionsContainer>
    </MainWrapper>
  );
};
