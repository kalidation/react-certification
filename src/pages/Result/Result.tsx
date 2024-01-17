import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";
import { QuestionList } from "../../components/QuestionList";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { URLS } from "../routes";
export const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [className, setClassName] = useState<
    "bad-score" | "normal-score" | "good-score"
  >("normal-score");

  const handleScore = () => {
    setScore((prev) => prev + 1);
  };

  useEffect(() => {
    if (score < 2) {
      setClassName("bad-score");
    } else if (score > 3) {
      setClassName("good-score");
    } else {
      setClassName("normal-score");
    }
  }, [className, score]);

  return (
    <div className="result-container">
      <h2>Resulsts</h2>
      <QuestionList
        handleScore={handleScore}
        isResult={true}
        quizList={state.quiz}
        selectedAnswer={state.selectedAnswer}
      />
      <div className={className}>Your scored {score} out of 5</div>
      <Button id="creatBtn" onClick={() => navigate(URLS.HOME_URL)}>
        Create a new Quiz
      </Button>
    </div>
  );
};
