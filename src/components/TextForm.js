import React, { useState } from 'react'

export default function TextForm(props) {
    // This function handleUPClick is responsible to make the text in textArea in UpperCase and hence as any activity is seeing using the button this function is activated and then this function changes the value of state variable to new variable which has the upper case variable being stored inside it using the given function below. To update the state of the text variable we make use of setText(newText), function.
    const handleUPClick = () => {
        console.log("Upper Case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Upper Case was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        console.log("Upper Case was clicked " + text);
        let newText ='';
        setText(newText);
    }
    const [count, setCount] = React.useState(0);
    function handleChange(event) {
        
        // This function will handle changes in textarea and set word counter accordingly
        setCount(event.target.value.length ?  event.target.value.trim().replace(/\n/g, " ").split(' ').length : 0);
    }
    // useState is a hook in React which is used to initialize a state variable. text is the default value 
    // text = "n"; this would have worked if we would have used "var" or "let" instead of "const"
    //text ="random";  wrong way to update the state of a variable. We need a function like setText() which will be upgrading the value of the variable "text".
    //setText("Correct way to change the state of any variable in React");
    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="16"></textarea>
                </div>
                {/* Here we define onChange in this textArea as our value of the textArea is a state Variable and its state has to be upgraded everytime we make changes in the textBox, the upgadation in textArea value can be done by listening to this event onChange using a function having event and who's setTexT(event.target.value), updates the value of our state variable text which eventually changes the value in textArea of textBox.*/}
                <button className="btn btn-primary mx-1 mb-1" onClick={handleUPClick} >Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 mb-1" onClick={handleLoClick} >Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 mb-1" onClick={handleClearClick} >Clear Text</button>
            </div>
            {/* Number of words and characters feature.*/}
           
            <div className="container my-3">
                <h4>Your Text Summary:</h4>
                <p>Word Counter: {count}</p>
                <p><em>{text.split(" ").length * 0.008} minute read.</em></p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    )
}
