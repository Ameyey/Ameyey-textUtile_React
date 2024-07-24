import React , {useState}from 'react'

export default function Form(props) {
const [text,textuse]=useState("Enter a text")
const click=()=>{
  console.log("Uppercreate was Clivked"+ text)
  const newtext=text.toUpperCase();
  textuse(newtext);
}
const oncl=(even)=>{
console.log("user a checking")
textuse(even.target.value);
}

  return (
    <div> 
    <div className="mb-3">
    <label for="myBox" className="form-label my-3 ">{props.title}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1"  onChange={oncl} value={text} rows="10" ></textarea>  
    <button className="btn btn-primary my-2" onClick={click }>save</button>
    </div>
    </div>
  )
}

