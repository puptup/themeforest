import { QuestionCard } from "tmfcomponents";

import { Container, QuestionsWrapper, Title } from "./styled";

type QuestionContainerProps = {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
  activeQuestion: string;
  handleActive: (question: string) => () => void;
};

export const QuestionContainer = ({
  title,
  questions,
  activeQuestion,
  handleActive,
}: QuestionContainerProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <QuestionsWrapper>
        {questions.map(({ answer, question }) => (
          <QuestionCard
            answer={answer}
            question={question}
            handleActive={handleActive(question)}
            active={question === activeQuestion}
          />
        ))}
      </QuestionsWrapper>
    </Container>
  );
};
