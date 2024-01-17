import HttpClient from "../client/HttpClient";
import { IQuizList } from "../models/quiz";

export interface IParams {
  category: string;
  difficulty: string;
}

class QuizService extends HttpClient {
  public getQuiz = async (params: IParams): Promise<IQuizList> => {
    const { category, difficulty } = params;
    const query = new URLSearchParams({
      amount: "5",
      type: "multiple",
      category: category,
      difficulty: difficulty,
    });

    const result = await this.get<IQuizList>({ url: "/api.php", query });

    return result;
  };
}

export default QuizService;
