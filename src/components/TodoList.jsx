import axios from 'axios';
import React, {useState} from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, setTodos, active, setActive, setSelectedTodo, selectedTodo}) => {
    const [content, setContent] = useState("");
    return (
        <div className="overflow-x-auto mt-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>할 일</th>
                        <th>완료 상태</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <TodoListItem
                                key={index}
                                todo={todo}
                                setTodos={setTodos}
                                index={index}
                                setActive={setActive}
                                setSelectedTodo={setSelectedTodo}
                                setContent={setContent} />
                        ))
                    }
                </tbody>
            </table>

            {/* modal 창  => active값에 따라 모달창 닫기*/}
            <input
                type="checkbox"
                id="my-modal-5"
                className="modal-toggle"
                checked={active}
                onChange={()=>{}} //경고를 위한 임시 onChange
            />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {/* 끄는 ui */}
                    <div
                        className=" flex justify-center w-5 ml-auto cursor-pointer"
                        onClick={() => {
                            setActive(false)
                        }}>✖</div>
                    <div>

                        <form
                            onSubmit={ async (e) => {
                                e.preventDefault();
                                //js 내부 방식으로 수정 (새로고침하면 없어짐.)
                                // setTodos(todos => todos.map((todo, index) => 
                                //         selectedTodo.id === todo.id ? {...todo, content} : todo
                                //     )
                                // );
                                const data = await axios({
                                    url: `http://localhost:8083/todos/edit/${selectedTodo.id}`,
                                    method : "PATCH",
                                    data:{
                                        content
                                    },
                                });
                                setTodos(data.data);
                                //수정하고 input데이터 없애기
                                setContent("");
                                setActive(false);
                            }}>
                            <div>수정할 내용을 입력해주세요.</div>
                            <input
                                type="text"
                                className="border rounded-md border-gray-500 w-60 mt-2"
                                value={content}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                }}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;