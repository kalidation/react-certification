import { IQuiz } from "../models/quiz";
import { QuestionItem } from "./QuestionItem";
import { ISelectedAnswer } from "../pages/Home/type";

interface IProps {
  quizList: IQuiz[];
  selectedAnswer: ISelectedAnswer[];
  isResult?: boolean;
  handleChangeAnswer?: (answer: string, questionId: number) => void;
  handleScore?: () => void;
}

export const QuestionList = (props: IProps) => {
  const {
    quizList,
    handleChangeAnswer,
    selectedAnswer,
    isResult,
    handleScore,
  } = props;

  return (
    <div>
      {quizList.map((quiz, index) => (
        <QuestionItem
          isResult={isResult}
          key={quiz.question}
          questionId={index}
          selectedAnswer={selectedAnswer}
          correctAnswer={quiz.correct_answer}
          incorrectAnswer={quiz.incorrect_answers}
          question={quiz.question}
          handleChangeAnswer={handleChangeAnswer}
          handleScore={handleScore}
        />
      ))}
    </div>
  );
};
