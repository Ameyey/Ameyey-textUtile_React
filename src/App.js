import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About'
import { useState } from 'react';
import Alerts from './components/Alerts';


function App() {
 const [mode,setmode]=useState('light');

 const [alert , setAlert] = useState (null)

 const showAlert = (messagem , type)=>{
  setAlert({
    msg: messagem,
    type: type
  })
  
}
setTimeout(() => {
  setAlert(null);
},1000);

 const toggleMode=()=>{
  if(mode ==='light'){
    setmode('dark');
    console.log("dark")
    document.body.style.backgroundColor='black';
    document.body.style.color="white"
    showAlert(" Drak mode has been eniables","success");
    document.title="Dark mode"
  }
  else{
    setmode('light');
    console.log('lisht')
    document.body.style.backgroundColor='white'
    document.body.style.color="black"
    showAlert(" list mode has been eniables","success");
    document.title="light mode"

  }
 }  

  return (
  <>
   <Navbar about="About" title="textUtile" mode={mode} togglemode={toggleMode} />   
   <Alerts alert={alert ||[]} />
   
   <div className="container">
   <Form showAlert={showAlert} title="Enter the text to analyze below" mode={mode} />

   <div className='my-4'>
   {/* <About mode={mode} /> */}
   </div>
   </div>
  </>
  );
}

export default App;
