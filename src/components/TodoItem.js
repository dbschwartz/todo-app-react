import Checkbox from "./Checkbox";
import Trash from "./Trash";
function TodoItem(props) {
  const completed = props.item.completed ? "completed" : "";
  return (
    <li className="todo-item">
      {props.item.completed ? (
        <span className="sr-only">Item is completed</span>
      ) : (
        <span className="sr-only"></span>
      )}
      <div className={`todo-item-text ${completed}`}>{props.item.text}</div>
      <div className="buttons">
        <Trash id={props.item.id} />
        <Checkbox
          id={props.item.id}
          completed={props.item.completed}
          index={props.index}
        />
      </div>
    </li>
  );
}

export default TodoItem;
