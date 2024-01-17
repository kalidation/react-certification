export interface IQuizList {
  response_code: number;
  results: IQuiz[];
}

export interface IQuiz {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
