import "./App.css";
import { Routes, Route } from "react-router-dom";
import Customer from './Redux/CustHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCust from  './Redux/AddCust'
import CustomerList from  './Redux/CustomerList'
import UpdateCust from './Redux/UpdateCust'
import Counter from './mobxcounter'
import appState from "./mcounter";
import Addnote from "./mobxtodo.js"

// import ImpRoutes from './importsroutes';
// import { routes } from "./importsroutes";


function App() {
  
  return (

    <Addnote />

    // <Counter appState={appState} />

    // <>
    // <Routes>
   
    // <Route path="/" element={<Customer />} />
    // <Route path="/CustomerList" element={<CustomerList/>} />
    // <Route path="/AddCust" element={<AddCust />} />
    // <Route path="/UpdateCust/:id" element={<UpdateCust />} />

    // </Routes>

    
    //   {/* <Routes>
    //     {routes.map((routes) => {
    //      return <Route key={routes.path} path={routes.path} element={routes.element} />;
    //     })}
    //   </Routes> */}
    // </>
  );
}
export default App;
