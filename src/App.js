import "./App.css";
import { Routes, Route } from "react-router-dom";
import Customer from './Redux/CustHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCust from  './Redux/AddCust'
import CustomerList from  './Redux/CustomerList'

// import ImpRoutes from './importsroutes';
// import { routes } from "./importsroutes";


function App() {
  
  return (

    <>
    <Routes>
   
    <Route path="/" element={<Customer />} />
    <Route path="/CustomerList" element={<CustomerList/>} />
    <Route path="/AddCust" element={<AddCust />} />

    </Routes>

    <CustomerList />
      {/* <Routes>
        {routes.map((routes) => {
         return <Route key={routes.path} path={routes.path} element={routes.element} />;
        })}
      </Routes> */}
    </>
  );
}
export default App;
