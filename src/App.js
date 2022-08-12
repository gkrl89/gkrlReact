import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom"  ;
import Home from './About'  ;
import Contact from './Contact'  ;
import Careers from './careers';
import NotFound from './notfound'
import ValidateForm from './newformreg';
import ValidatedForm from './validateform';
import Dashboard from './dashboard';
import Reducer from './reducer.js';
import { ReactDOM } from 'react';
// import Portal from './portal';

function App(){

  return(
    <>
    <BrowserRouter>

     
  
    <Routes>
      <Route path="/"  element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/register" element={<ValidateForm />} />
        <Route path="/login" element={<ValidatedForm />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/reducer" element={<Reducer />}/>

        <Route path="*" element={<NotFound/>}/>       
      
    </Routes>
   
   
  </BrowserRouter> 
  </>

  )
}





      
   
      
  


export default App;

