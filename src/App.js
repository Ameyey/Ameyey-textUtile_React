import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About'
function App() {
  return (
  <>
   <Navbar about="About" title="textUtile"/>
   <div className="container">
   {/* <Form title="Enter the text to analyze below"/> */}
   <div className='my-4'>
   <About />
   </div>
   </div>
  </>
  );
}

export default App;
