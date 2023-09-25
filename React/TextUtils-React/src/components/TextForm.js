import React, {useState} from 'react'


export default function TextForm(props) {


    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handleClear = () =>{
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () =>{
        // console.log("I am copy clicked");
        // let text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!", "success");
        
    }

    const handleExtraSpaces = () =>{
        // console.log("I am copy clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaced Removed!", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "Hello Rajat"; wrong way to change the state
    // setText("New text"); //Correct Way to change the state
    
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', 
                color: props.mode === 'dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear All</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="containner my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length!==0 }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{
                return element.length!==0 }).length } Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Nothing to Preview!"}</p>
        </div>
        </>
    )
}
