import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>할 일</th>
                        <th>완료 상태</th>
                    </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <TodoListItem todo={todo}/>
                  ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;