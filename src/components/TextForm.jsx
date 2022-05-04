import React ,{useState}from 'react'
export default function TextForm(props) {
const [text,setText]=useState("");
const handleupClick=()=>{
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("converted into upper case","success");
    
} 
const handleLpClick=()=>{
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted into lower case","success");
} 
const handleclearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleard","success");
} 
const Onchange=(event)=>{
    console.log("onchange");
    setText(event.target.value);
}
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Enter The text to Analyze</h1>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={Onchange} id="exampleFormControlTextarea1"style={{backgroundColor: props.mode==='dark'?'grey':'light',color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            <button className="btn btn-outline-primary my-3 mx-1" onClick={handleupClick}>Convert To Uper case</button>
            <button className="btn btn-outline-primary my-3 mx-1" onClick={handleLpClick}>Convert To Lower case</button>
            <button className="btn btn-outline-primary my-3 mx-1" onClick={handleclearClick}>Clear</button>
        </div>
    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} charatcters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"Enter text to preview here"}</p>
    </div>
    </>
  )
}
