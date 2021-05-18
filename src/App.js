import "./assets/css/App.css";
import { RecoilRoot } from "recoil";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";

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
