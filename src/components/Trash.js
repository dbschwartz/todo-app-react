import "../Checkbox.css";
import { todoListState } from "../atoms/todoListState";

import { useRecoilState } from "recoil";

function Trash(props) {
  const [toDoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = () => {
    setTodoList(toDoList.filter((item) => item.id !== props.id));
  };

  return (
    <button
      className="trash-button"
      aria-label="Delete Item From List"
      onClick={handleChange}
    ></button>
  );
}
export default Trash;
