import React , {useState}from 'react'

export default function Form(props) {
const [text,textuse]=useState("Enter a text")
const click=()=>{
  // console.log("Uppercreate was Clivked"+ text)
  const newtext=text.toUpperCase();
  textuse(newtext);
}
const oncl=(even)=>{
// console.log("user a checking")
textuse(even.target.value);
}

const LowerCase=()=>{
  let newtext=text.toLocaleLowerCase();
  textuse(newtext);
}

  return (
    <>
    <div className='container'> 
    <div className="mb-3">
    <label for="myBox" className="form-label my-3 ">{props.title}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1"  onChange={oncl} value={text} rows="10" ></textarea>  
    <button className="btn btn-primary my-2" onClick={click}>Uppercreate</button>
    <button className='btn btn-primary mx-3' onClick={LowerCase}>LowerCase</button>
    </div>
    </div>
    <div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>{0.008 * text.split("").length}Minutest read</p>
        <p>{text.split(" ").length} word ,{text.length} Chcharacter</p>        
        <p>{text}</p>
      </div>
    </div>
    </>
  )
}

