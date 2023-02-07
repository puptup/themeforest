import { controlIcons } from "@assets/control-icons";
import { QuestionCard } from "@components/question-card";
import { questions } from "@constants/questions";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Description, Head, History, PageName, QuestionsContainer, Title } from "./styled";

export const HeadSection = () => {
  return (
    <MainWrapper>
      <History>
        <Link to="/">Home</Link> <img src={controlIcons.Divider} alt="divider" /> FAQs
      </History>
      <Head>
        <PageName>FAQs</PageName>
        <Title>Frequently asked questions</Title>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium totam.
        </Description>
      </Head>
      <QuestionsContainer>
        {questions.map(({ question, answer }, index) => (
          <QuestionCard question={question} answer={answer} key={index} />
        ))}
      </QuestionsContainer>
    </MainWrapper>
  );
};
