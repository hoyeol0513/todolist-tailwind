import axios from 'axios';
import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdModeEditOutline, MdRemoveCircleOutline } from 'react-icons/md';

const TodoListItem = ({todo, setTodos, index}) => {
    const {id, content, checked} = todo;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{content}</td>
            <td>
              <div onClick={()=>{alert("체크 클릭됨")}}>
                <div>{checked ?  <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
              </div>

            </td>
            <td className='edit'>
              <MdModeEditOutline />
            </td>
            <td className='remove'>
              {/* 삭제방법 
              1. 바로 벡으로 날려서 삭제 
              2. 자바스크립트 내부 배열을 이용한 후 삭제 */}
              <div onClick={async() =>{
                alert(id);
                //자바스크립트 내부에서 삭제 방법 => filter함수 (해당 조건만 남기는 자바스크립트 함수)
                //클릭한 것의 아이디와 다른 것만 남김 (=> 같은 건 삭제)
                //setTodos(todos => todos.filter((todo) => todo.id !== id))
                const data = await axios({
                  url : `http://localhost:8083/todos/${id}`,
                  method : "DELETE",
                });
                setTodos(data.data);
              }}>
                <MdRemoveCircleOutline />
              </div>
            </td>
        </tr>
    );
};

export default TodoListItem;