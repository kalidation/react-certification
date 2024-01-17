import "./QuizCreate.css";
import { Button } from "react-bootstrap";
import { IOption, InputSelect } from "../InputSelect";
import { IDifficulty } from "../../models/difficulties";
import { ICategory } from "../../models/catogories";

interface IProps {
  categories: ICategory[];
  difficulties: IDifficulty[];
  handleCreateQuiz: () => void;
  handleOnChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeDifficulty: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const QuizCreate = (props: IProps) => {
  const {
    categories,
    difficulties,
    handleCreateQuiz,
    handleOnChangeCategory,
    handleOnChangeDifficulty,
  } = props;

  const categoriesToOptionList = (): IOption[] =>
    categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      value: cat.id,
    }));

  return (
    <div className="quiz-create-container">
      <InputSelect
        id="categorySelect"
        optionList={categoriesToOptionList()}
        title="Select a category"
        onChange={handleOnChangeCategory}
      />
      <InputSelect
        id="difficultySelect"
        optionList={difficulties}
        title="Select difficulty"
        onChange={handleOnChangeDifficulty}
      />
      <Button id="createBtn" onClick={handleCreateQuiz} variant="primary">
        Create
      </Button>
    </div>
  );
};
