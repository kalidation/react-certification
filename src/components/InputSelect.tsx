import Form from "react-bootstrap/Form";

export interface IOption {
  id: string;
  name: string;
  value: string;
}

interface IProps {
  id: string;
  title: string;
  optionList: IOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect = (props: IProps) => {
  const { id, optionList, title, onChange } = props;

  return (
    <Form.Select id={id} onChange={onChange}>
      <option>{title}</option>
      {optionList.map((optionItem) => (
        <option key={optionItem.id} value={optionItem.value}>
          {optionItem.name}
        </option>
      ))}
    </Form.Select>
  );
};
