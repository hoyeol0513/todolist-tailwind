import React from 'react';

const TodoListItem = ({todo}) => {
    return (
        <tr>
            <th>{todo.id}</th>
            <td>{todo.content}</td>
            <td>{todo.checked}</td>
        </tr>
    );
};

export default TodoListItem;