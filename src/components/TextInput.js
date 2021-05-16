import{ useState } from 'react';
import { todoListState } from '../atoms/todoListState'
import {
    useSetRecoilState
  } from 'recoil';
  import { v4 as uuidv4 } from 'uuid';


function TextInput(props) {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const onChange = ({target: {value}}) => {
        setInputValue(value);
      };
      const onKeyPress = e => {
          if(e.key === "Enter") {
            setTodoList( oldTodoList  => [  
                ...oldTodoList,
                {
                  text: inputValue,
                  isComplete: false,
                  id: uuidv4()
                }
              ]);
              setInputValue('');
              

          }
      };

    return (
      <input type ="text" value={inputValue }className="text-box" onChange={onChange} onKeyPress={onKeyPress}/>
    );
  }
export default TextInput;
