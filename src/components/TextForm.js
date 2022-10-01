import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value);
    }

    const clearTextHandler = () => {
        setText('');
    }
    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" v  id="exampleFormControlTextarea1" rows="16" value={text}  onChange={changeHandler} placeholder="Enter the text"></textarea>
                </div>
                <button className="btn btn-primary mx-1 mb-1" >Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 mb-1"  >Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 mb-1"  onClick={clearTextHandler}>Clear Text</button>
            </div>


        </>
    )
}
