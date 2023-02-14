import { QuestionCard } from "@components/question-card";
import { questions } from "@constants/questions";
import { Language } from "@localization";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";
import { useTranslation } from "react-i18next";

import { QuestionsContainer } from "./styled";

const tPath = "faqs.";

export const FaqsSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName={t(`${tPath}pageName`)}
        title={t(`${tPath}pageTitle`)}
        description={t(`${tPath}description`)}
      />
      <QuestionsContainer>
        {questions[lang].map(({ question, answer }, index) => (
          <QuestionCard question={question} answer={answer} key={index} />
        ))}
      </QuestionsContainer>
    </MainWrapper>
  );
};
