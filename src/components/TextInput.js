import{ useState } from 'react';
import { todoListState } from '../atoms/todoListState'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useSetRecoilState,
    useRecoilValue,
  } from 'recoil';

function TextInput(props) {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const onChange = ({target: {value}}) => {
        setInputValue(value);
      };
      const onKeyPress = e => {
          if(e.key === "Enter") {
            setTodoList((oldTodoList) => [
                ...oldTodoList,
                {
                  text: inputValue,
                  isComplete: false,
                },
              ]);
              setInputValue('');
              

          }
      };

    return (
      <input type ="text" value={inputValue }className="text-box" onChange={onChange} onKeyPress={onKeyPress}/>
    );
  }
export default TextInput;
