import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLoClick = () => {
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase', 'success')
    }


    const handleOnChange = (e) => {
        // console.log("on change")
        setText(e.target.value)
    }

    const handleClear = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert('Text cleared', 'success')
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert('Text copied', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Removede extra spaces', 'success')

    }

    const [text, setText] = useState("");
    // text is used as an input text 
    // setText is like an output text.means text got after transform 
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Write text here' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra space</button>
            </div>

            <div className="container  my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text summary</h2>
                <p> {text.split(" ").filter((element) => { return element.length !== 0 }).length} <strong>words</strong> and {text.length + " "}<strong>Characters</strong></p>
                <hr />
                <h2 className="">PREVIEW</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    )
}

