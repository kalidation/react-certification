import "./Home.css";
import React, { useState } from "react";
import useCategories from "../../hooks/useCategories";
import { QuizCreate } from "../../components/QuizCreate/QuizCreate";
import useQuiz from "../../hooks/useQuiz";
import {
  IDifficulty,
  EDifficulty,
  EDifficultyValue,
} from "../../models/difficulties";
import { QuestionList } from "../../components/QuestionList";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ISelectedAnswer } from "./type";
import { URLS } from "../routes";

export const Home = () => {
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<ISelectedAnswer[]>([]);

  const navigate = useNavigate();
  const { categories } = useCategories();
  const { quiz, getQuiz } = useQuiz({ category, difficulty }, false);

  const handleOnChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(event.target.value);
  };

  const handleOnChangeDifficulty = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setDifficulty(event.target.value);
  };

  const handleCreateQuiz = (): void => {
    if (category !== "" && difficulty !== "") {
      setSelectedAnswer([]);
      setSelectedAnswerNumber(0);
      getQuiz({ category, difficulty });
    } else {
      alert("Please, select category and difficulty !");
    }
  };

  const handleOnSubmit = () => {
    navigate(URLS.RESULT_URL, {
      state: {
        quiz: quiz,
        selectedAnswer: selectedAnswer,
      },
    });
  };

  const handleChangeAnswer = (answer: string, questionId: number) => {
    const getAnswer = selectedAnswer.find(
      (item) => item.questionId === questionId
    );

    if (getAnswer === undefined) {
      setSelectedAnswer((prev) => [...prev, { answer, questionId }]);
      setSelectedAnswerNumber((prev) => prev + 1);
    } else {
      const newSelectedAnswer = selectedAnswer.map((item) => {
        if (item.questionId === questionId) {
          return { ...item, answer };
        }

        return item;
      });

      setSelectedAnswer(newSelectedAnswer);
    }
  };

  const difficulties: IDifficulty[] = [
    { id: "0", name: EDifficulty.EASY, value: EDifficultyValue.EASY },
    { id: "1", name: EDifficulty.MEDUIM, value: EDifficultyValue.MEDUIM },
    { id: "2", name: EDifficulty.HARD, value: EDifficultyValue.HARD },
  ];

  return (
    <div className="home-container">
      <h2>Quiz Maker</h2>
      <QuizCreate
        categories={categories}
        difficulties={difficulties}
        handleOnChangeCategory={handleOnChangeCategory}
        handleOnChangeDifficulty={handleOnChangeDifficulty}
        handleCreateQuiz={handleCreateQuiz}
      />
      <QuestionList
        quizList={quiz}
        handleChangeAnswer={handleChangeAnswer}
        selectedAnswer={selectedAnswer}
      />
      {selectedAnswerNumber === 5 && (
        <Button className="submit-button" onClick={handleOnSubmit}>
          Submit
        </Button>
      )}
    </div>
  );
};
