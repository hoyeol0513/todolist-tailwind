import axios from 'axios';
import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdModeEditOutline, MdRemoveCircleOutline} from 'react-icons/md';

const TodoListItem = ({todo, setTodos, index, setActive, setSelectedTodo, setContent}) => {
    const {id, content, checked} = todo;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{content}</td>
            {/* div는 td를 감싸면 안됨. div의 자식으로 td 안됨. */}
            <td>
                <div
                    onClick={async () => {
                        //front에서만 바뀌는 로직
                        // todos 배열을 돌면서 id값이 같으면 checked를 반전, 아니면 그냥 기존 유지 setTodos( (todos) =>
                        // todos.map((todo, index) =>
                        //   todo.id === id ? {...todo, checked : !todo.checked} : todo   ) );
                        const data = await axios(
                            {url: `http://localhost:8083/todos/edit/${id}`, method: "PATCH"}
                        )
                        setTodos(data.data);
                    }}>
                    {
                        checked
                            ? <MdCheckBox/>
                            : <MdCheckBoxOutlineBlank/>
                    }
                </div>
            </td>
            <td className='edit'>
                {/* modal 창의 label을 추가하기 */}
                <label
                    htmlFor="my-modal-5"
                    className="modal-button cursor-pointer"
                    onClick={() => {
                      setSelectedTodo(todo);
                      setContent(content);
                      setActive(true);
                    }}>
                    <MdModeEditOutline/>
                </label>
            </td>
            <td className='remove'>
                {/* 삭제방법
              1. 바로 벡으로 날려서 삭제
              2. 자바스크립트 내부 배열을 이용한 후 삭제 */
                }
                <div
                    onClick={async () => {
                        // 자바스크립트 내부에서 삭제 방법 => filter함수 (해당 조건만 남기는 자바스크립트 함수) 클릭한 것의 아이디와 다른 것만 남김 (=>
                        // 같은 건 삭제) setTodos(todos => todos.filter((todo) => todo.id !== id))
                        const data = await axios(
                            {url: `http://localhost:8083/todos/${id}`, method: "DELETE"}
                        );
                        setTodos(data.data);
                    }}>
                    <MdRemoveCircleOutline/>
                </div>
            </td>
        </tr>
    );
};

export default TodoListItem;