function TodoItem(props) {
  
    return <li class="todo-item">
            <div class="todo-item-text">{props.item.text}</div>
            </li>
  }
  
  
  export default TodoItem;