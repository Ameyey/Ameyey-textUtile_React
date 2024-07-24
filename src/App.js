import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
  <>
   <Navbar about="About" title="textUtile"/>
   <div className="container">
   <Form title="Enter the text to analyze below"/>
   </div>
  </>
  );
}

export default App;
