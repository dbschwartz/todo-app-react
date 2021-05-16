import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';



const todoListState = atom({
  key: 'todoListState',
  default: [],
});

function App() {
  return (
    <RecoilRoot>
      <div id="container">
          <TextInput />
          <TodoList />
      </div>
    </RecoilRoot>

  );
}

export default App;
