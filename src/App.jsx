import axios from "axios";
import {useEffect, useRef, useState} from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [active, setActive] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState([]); //클릭하면 해당 아이디를 찾기 위함.
    //기존 백엔드에 있는 데이터 가져오기
    useEffect(()=>{
      const getData = async() => {
        const datas = await axios({
          url : "http://localhost:8083/todos",
          method : "GET",
        });
        setTodos(datas.data);
      };
      getData();
    },[]);

    // useRef는 useState랑 유사하지만 변경되어도 렌더링을 안함.
    const nextId = useRef(4);

    return (
        <div className="max-w-4xl m-auto mt-4">
            <Todoinput todos={todos} nextId={nextId} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} active={active} setActive={setActive} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
        </div>
    );
}

export default App;
