import { useCallback, useEffect, useState } from "react";
import { IQuiz } from "../services/model";
import QuizService, { IParams } from "../services/quizService";

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
      setQuiz(res.results);
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
