import { useCallback, useEffect, useState } from "react";
import QuizService, { IParams } from "../services/quizService";
import { IQuiz } from "../models/quiz";

interface IResults {
  quiz: IQuiz[];
  getQuiz: (params: IParams) => void;
}

const useQuiz = (params: IParams, excuteOnMount = true): IResults => {
  const { category, difficulty } = params;
  const [quiz, setQuiz] = useState<IQuiz[]>([]);

  const getQuiz = useCallback(({ category, difficulty }: IParams) => {
    const categoriesService = new QuizService();

    categoriesService.getQuiz({ category, difficulty }).then((res) => {
      const randomQuiz: IQuiz[] = res.results.map((result) => {
        return {
          ...result,
          answers: [...result.incorrect_answers, result.correct_answer].sort(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (_a, _b) => 0.5 - Math.random()
          ),
        };
      });

      setQuiz(randomQuiz);
    });
  }, []);

  useEffect(() => {
    if (excuteOnMount) {
      getQuiz({ category, difficulty });
    }
  }, [category, difficulty, excuteOnMount, getQuiz]);

  return {
    quiz,
    getQuiz,
  };
};

export default useQuiz;
