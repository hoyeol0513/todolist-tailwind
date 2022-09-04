import {useRef, useState} from "react";
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
        checked : true
      },
      {
        id : 3,
        content : "아침운동",
        checked : false
      }
    ]);
    
    // useRef는 useState랑 유사하지만 변경되어도 렌더링을 안함.
    const nextId = useRef(4);

    return (
        <div className="max-w-4xl m-auto mt-4">
            <Todoinput todos={todos} nextId={nextId} setTodos={setTodos} />
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
