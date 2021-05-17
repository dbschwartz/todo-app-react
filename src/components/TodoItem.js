import Checkbox from "./Checkbox";
function TodoItem(props) {
  const completed = props.item.completed ? "completed" : "";
  return (
    <li className="todo-item">
      <div className={`todo-item-text ${completed}`}>{props.item.text}</div>
      <div className="buttons">
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
