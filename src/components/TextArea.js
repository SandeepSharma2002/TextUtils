import React, { useState } from "react";

export default function Textarea(props) {
    const handleUpClick = () =>{
        let NewText = text.toUpperCase();
        setText(NewText);

    }
    const handleLowerClick = () =>{
        let NewText = text.toLowerCase();
        setText(NewText);

    }
    const handleOnChange = (Event) =>
    {
        setText(Event.target.value);
    }

    const[text,setText] = useState("")
  return (
    <>
        <div className="form-group" style={{color: props.mode === "dark" ? "white":"#042743"}}>
          <label for="mybox">{props.heading}</label>
          <textarea
            className="form-control my-2"
            value={text}
            placeholder = "Enter Your Text Here"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
          <button type="button" class="btn btn-primary mx-1"  onClick={handleUpClick} >ChangeUpperCase</button>
          <button type="button" class="btn btn-primary"  onClick={handleLowerClick} >ChangeLowerCase</button>
        </div>
    </>
  );
}
