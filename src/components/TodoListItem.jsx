import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdModeEditOutline, MdRemoveCircleOutline} from 'react-icons/md';

const TodoListItem = ({todo}) => {
    const {id, content, checked} = todo;
    return (
        <tr>
            <th>{id}</th>
            <td>{content}</td>
            <div onClick={()=>{alert("체크 클릭됨")}}>
              <td>{checked ?  <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</td>
            </div>
            <td className='edit'>
              <MdModeEditOutline />
            </td>
            <td className='remove'>
              <MdRemoveCircleOutline />
            </td>
        </tr>
    );
};

export default TodoListItem;