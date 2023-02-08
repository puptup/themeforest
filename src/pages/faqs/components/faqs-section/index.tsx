import { QuestionCard } from "@components/question-card";
import { questions } from "@constants/questions";
import { HeadSection } from "@modules/head-section";
import { MainWrapper } from "@ui/main-wrapper";

import { QuestionsContainer } from "./styled";

export const FaqsSection = () => {
  return (
    <MainWrapper>
      <HeadSection
        variant="primary"
        pageName="FAQs"
        title="Frequently asked questions"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium totam."
      />
      <QuestionsContainer>
        {questions.map(({ question, answer }, index) => (
          <QuestionCard question={question} answer={answer} key={index} />
        ))}
      </QuestionsContainer>
    </MainWrapper>
  );
};
