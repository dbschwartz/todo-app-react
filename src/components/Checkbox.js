import "../assets/css/Checkbox.css";
import { todoListState } from "../atoms/todoListState";

import { useRecoilState } from "recoil";

function Checkbox(props) {
  const [toDoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = ({ target: { value } }) => {
    setTodoList(
      toDoList.map((item, index) => {
        if (item.id === props.id) {
          return { ...item, completed: !props.completed };
        }
        return item;
      })
    );
  };

  return (
    //technique derived from https://moderncss.dev/pure-css-custom-checkbox-style/
    <label className="checkbox">
      <span className="checkbox__input">
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          aria-label={
            props.completed
              ? "Item is completed. Mark item as Incomplete"
              : "Item is incomplete. Mark item As Complete"
          }
        />
        <span className="checkbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </span>
    </label>
  );
}
export default Checkbox;
