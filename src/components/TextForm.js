import React, { useState } from 'react'

export default function TextForm(props) {
    const [count, setCount] = React.useState(0);
    function handleChange(event) {
        
        // This function will handle changes in textarea and set word counter accordingly
        setCount(event.target.value.length ?  event.target.value.trim().replace(/\n/g, " ").split(' ').length : 0);
    }
    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" v  id="exampleFormControlTextarea1" rows="16"
                    onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 mb-1"  >Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 mb-1"  >Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 mb-1"  >Clear Text</button>
                <p>Word Counter: {count}</p>
            </div>


        </>
    )
}
