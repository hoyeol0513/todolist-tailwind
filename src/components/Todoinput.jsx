import axios from 'axios';
import React, { useState } from 'react';

const Todoinput = ({todos, nextId, setTodos }) => {
    const [content, setContent] = useState("");
    return (
        <div className="form-control w-full ">
            <form onSubmit={async(e)=>{
                //엔터로 제출했을 때 새로고침되는 걸 막음 (html 기본 기능을 막음)
                e.preventDefault();

                // 프론트와 벡 연동
                const data = await axios({
                    url:"http://localhost:8083/todos", 
                    method:"POST", 
                    // content : content 를 content로 변경 가능.
                    data: { content } 
                });
                //js 로직 말고 데이터 넣기
                setTodos(data.data);
                
                nextId.current++;
                setContent("");
            }}>
                <label className="label">
                    <span className="label-text">할 일을 추가해주세요! </span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-4xl"
                    value={content}
                    onChange={(e)=>{
                        setContent(e.target.value);
                    }}/>
            </form>
        </div>
    );
};

export default Todoinput;