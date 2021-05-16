import { todoListState } from '../atoms/todoListState'
import {
    useRecoilState
  } from 'recoil';

function TodoList() {
    const [toDoList, setTodoList] = useRecoilState(todoListState);
  
    // const addItem = () => {
    //   setTodoList((oldTodoList) => [
    //     ...oldTodoList,
    //     {
    //       id: getId(),
    //       text: inputValue,
    //       isComplete: false,
    //     },
    //   ]);
    //   setInputValue('');
    // };
  
    // const onChange = ({target: {value}}) => {
    //   setInputValue(value);
    // };
    const listItems = toDoList.map(item => <li class="list-item">{item.text}</li>)
  
    return (
      <ul class="todo-list">
         {listItems}
      </ul>
    );
  }
  
  
  export default TodoList;