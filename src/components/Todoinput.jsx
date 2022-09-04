import React from 'react';

const Todoinput = () => {
    return (
        <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">할 일을 추가해주세요! </span>
            </label>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-4xl"/>
        </div>
    );
};

export default Todoinput;