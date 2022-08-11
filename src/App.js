import logo from './logo.svg';
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
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import Parent from './parent';



import { Outlet, Link } from "react-router-dom";

function App(){


 return(
  <>

  {/* <Parent/> */}


  

 
  <BrowserRouter>

     
  
    <Routes>
      <Route path="/"  element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/register" element={<ValidateForm />} />
        <Route path="/login" element={<ValidatedForm />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="*" element={<NotFound/>}/>       
      
    </Routes>
   
   
  </BrowserRouter>
  </> 
)
}



      
   
      
  


export default App;

