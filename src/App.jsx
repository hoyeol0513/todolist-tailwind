import {useState} from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
      {
        id : 1,
        content : "기상",
        checked : false
      },
      {
        id : 2,
        content : "밥먹기",
        checked : false
      },
      {
        id : 3,
        content : "아침운동",
        checked : false
      }
    ]);
    return (
        <div className="max-w-4xl m-auto mt-4">
            <Todoinput/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
