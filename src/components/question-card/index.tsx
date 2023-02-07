import { controlIcons } from "@assets/control-icons";
import { useState } from "react";

import { Answer, Icon, QuestionBlock, Title, Wrapper } from "./styled";

type QuestionCardProps = {
  question: string;
  answer: string;
};

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Wrapper onClick={handleShow}>
      <QuestionBlock>
        <Title active={show}>{question}</Title>
        {show ? <Icon src={controlIcons.minus} /> : <Icon src={controlIcons.plus} />}
      </QuestionBlock>
      {show && <Answer>{answer}</Answer>}
    </Wrapper>
  );
};
