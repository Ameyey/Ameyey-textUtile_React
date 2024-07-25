import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About'
import { useState } from 'react';
import Alerts from './components/Alerts';
function App() {
 const [mode,setmode]=useState('light')  

 const toggleMode=()=>{
  if(mode ==='light'){
    setmode('dark');
    console.log("dark")
    document.body.style.backgroundColor='black';
    document.body.style.color="white"
  }
  else{
    setmode('light');
    console.log('lisht')
    document.body.style.backgroundColor='white'
    document.body.style.color="black"
  }
 }  

  return (
  <>
   <Navbar about="About" title="textUtile" mode={mode} togglemode={toggleMode} />
   <Alerts alert="are akert"/>

   <div className="container">
   <Form title="Enter the text to analyze below" mode={mode} />
   <div className='my-4'>
   {/* <About mode={mode} /> */}
   </div>
   </div>
  </>
  );
}

export default App;
