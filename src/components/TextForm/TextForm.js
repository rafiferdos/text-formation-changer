import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Converted to uppercase", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Converted to lowercase", "success")
  };
  const handleClClick = () => {
    let newText = '';
    setText(newText);
    props.displayAlert("Text Cleared", "info")
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.displayAlert("Text copied", "primary")
  }
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.displayAlert("Extra spaces removed", "success")
  }
  return (
    <>
      <div className="container my-5" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1 className="text-center display-2">{props.heading}</h1>
        <div className="mb-5">
          <textarea
            style={{backgroundColor: props.mode === 'light'? '#ffffff' : '#2C3A47', borderColor: props.mode === 'light'? '#000':'#000',color: props.mode === 'dark'? 'white': 'black'}}
            id="myBox"
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
            className="form-control mb-3"
            rows="10"
          />
          <div className="btn-group btn-group-sm" role="group">
          <button onClick={handleUpClick} className={`btn btn-${props.mode === 'dark'?'':'outline-'}primary`}>
            Convert to Uppercase
          </button>
          <button onClick={handleLoClick} className={`btn btn-${props.mode === 'dark'?'':'outline-'}info`}>
            Convert to Lowercase
          </button>
          <button onClick={handleClClick} className={`btn btn-${props.mode === 'dark'?'':'outline-'}danger`}>
            Clear
          </button>
          <button onClick={handleRemoveExtraSpaces} className={`btn btn-${props.mode === 'dark'?'':'outline-'}warning`}>
            Remove Extra Spaces
          </button>
          <button onClick={handleCopy} className={` text-dark btn btn-${props.mode === 'dark'?'':'outline-'}light`}>
            Copy Text
          </button>
          </div>
        </div>
      </div>
      <div style={{color: props.mode === 'dark'? 'white': 'black'}} className="container my-3 summary text-center" >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>
          This will take average {0.008 * text.split(" ").length} minutes time
          to read.
        </p>
      </div>
      <div className="preview container" style={{backgroundColor: props.mode=== 'dark'? '#2c2c54': '#f1f2f6',color: props.mode === 'dark'? 'white': 'black'}}>
        <h2 className="text-center">Preview:</h2>
        <p className="text-preview py-3 px-3" style={{backgroundColor: props.mode=== 'dark'? '#3c6382': '#f5f6fa'}}>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  );
}
