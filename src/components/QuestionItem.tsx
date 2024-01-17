import { AnswerItem } from "./AnswerItem";
import { ButtonGroup } from "react-bootstrap";
import { ISelectedAnswer } from "../pages/Home/type";

interface IProps {
  questionId: number;
  question: string;
  correctAnswer: string;
  anwers: string[];
  selectedAnswer: ISelectedAnswer[];
  isResult?: boolean;
  handleChangeAnswer?: (answer: string, questionId: number) => void;
  handleScore?: () => void;
}

export const QuestionItem = (props: IProps) => {
  const {
    question,
    correctAnswer,
    anwers,
    questionId,
    selectedAnswer,
    handleChangeAnswer,
    handleScore,
    isResult,
  } = props;

  const getSelectedAnswer = () =>
    selectedAnswer.find((answer) => answer.questionId === questionId);

  return (
    <div>
      <div> {question} </div>
      <ButtonGroup>
        {anwers.map((answer, index) => (
          <AnswerItem
            key={answer}
            questionId={questionId}
            answerId={index}
            answer={answer}
            correctAnswer={correctAnswer}
            checked={answer === getSelectedAnswer()?.answer}
            isResult={isResult}
            handleOnChange={handleChangeAnswer}
            handleScore={handleScore}
          />
        ))}
      </ButtonGroup>
    </div>
  );
};
