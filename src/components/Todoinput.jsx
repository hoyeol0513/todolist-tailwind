import React, { useState } from 'react';

const Todoinput = ({todos, nextId, setTodos }) => {
    const [value, setValue] = useState("");
    return (
        <div className="form-control w-full ">
            <form onSubmit={(e)=>{
                //엔터로 제출했을 때 새로고침되는 걸 막음 (html 기본 기능을 막음)
                e.preventDefault();
                const todo = { 
                    id : nextId.current,
                    content : value,
                    checked : false
                };
                setTodos((prev) => prev.concat(todo));
                setValue("");
                nextId.current++;
            }}>
                <label className="label">
                    <span className="label-text">할 일을 추가해주세요! </span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-4xl"
                    value={value}
                    onChange={(e)=>{
                        setValue(e.target.value);
                    }}/>
            </form>
        </div>
    );
};

export default Todoinput;