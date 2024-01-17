import { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

interface IProps {
  questionId: number;
  answerId: number;
  answer: string;
  checked: boolean;
  correctAnswer?: string;
  isResult?: boolean;
  handleOnChange?: (answer: string, questionId: number) => void;
  handleScore?: () => void;
}

export const AnswerItem = (props: IProps) => {
  const {
    answer,
    handleOnChange,
    checked,
    questionId,
    answerId,
    isResult,
    correctAnswer,
    handleScore,
  } = props;

  const [variant, setVariant] = useState<string>("outline-primary");

  useEffect(() => {
    if (isResult) {
      if (checked && answer !== correctAnswer) {
        setVariant("danger");
      }

      if (answer === correctAnswer) {
        setVariant("success");
      }
    }
  }, [isResult]);

  useEffect(() => {
    if (isResult && checked && handleScore && answer === correctAnswer) {
      handleScore();
    }
  }, [isResult]);

  return (
    <ToggleButton
      className="mb-2"
      id={`radio-${questionId}-${answerId}`}
      type="checkbox"
      variant={variant}
      checked={checked}
      value={answer}
      onChange={(e) => {
        if (isResult) {
          e.preventDefault;
        }
        if (handleOnChange) {
          handleOnChange(e.currentTarget.value, questionId);
        }
      }}
    >
      {answer}
    </ToggleButton>
  );
};
