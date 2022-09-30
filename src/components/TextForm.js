import React, { useState } from 'react'
import WordCount from './WordCount';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const updateEditor = (e) => {
        const { value } = e.target;
        setText(value)
    }

    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="16"
                        value={text}
                        onChange={updateEditor}
                    />
                </div>
                <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <div>
                        <button className="btn btn-primary mx-1 mb-1">Convert to Upper Case</button>
                        <button className="btn btn-primary mx-1 mb-1">Convert to Lower Case</button>
                        <button className="btn btn-primary mx-1 mb-1">Clear Text</button>
                    </div>
                    <WordCount count={text.length} />
                </div>
            </div>


        </>
    )
}
