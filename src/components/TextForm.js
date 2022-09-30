import React, { useState } from 'react'

export default function TextForm(props) {

    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" v  id="exampleFormControlTextarea1" rows="16"></textarea>
                </div>
                <button className="btn btn-primary mx-1 mb-1" >Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 mb-1"  >Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 mb-1"  >Clear Text</button>
            </div>


        </>
    )
}
