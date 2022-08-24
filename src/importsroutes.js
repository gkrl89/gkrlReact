import React from "react";
import About from "./About";
import Contact from "./Contact";
import Careers from "./careers";
import NotFound from "./notfound";
import ValidateForm from "./newformreg";
import ValidatedForm from "./validateform";
import Dashboard from "./dashboard";
import Reducer from "./reducer.js";
import TodoApp from "./todo.js";
import Portal from "./portal";
import SampleApi from "./sampleapi";
import Inventory from "./inventory";
import Employee from "./Employee";
import AddEmp from "./addemp";
import Emp from "./empdetails";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function ImpRoutes() {
//   return (
//     <>
//       {/* <BrowserRouter> */}

//       {/* <Routes>
//   <Route path="/"  element={<Employee/>}/>
//     <Route path="/empdetails" element={<Emp />} />
//     <Route path="/addemp" element={<AddEmp />} />
//     </Routes>
//     </BrowserRouter>
//      */}

//       <BrowserRouter>
//         <DataContext.Provider value="You are accessing Product Information.">
//           <Routes>
//             <Route path="/" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/register" element={<ValidateForm />} />
//             <Route path="/login" element={<ValidatedForm />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/reducer" element={<Reducer />} />
//             <Route path="/todo" element={<TodoApp />} />
//             <Route path="/sampleapi" element={<SampleApi />} />
//             <Route path="/inventory" element={<Inventory />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </DataContext.Provider>

//     </>
//   );
// }
// export default ImpRoutes;

export const routes = [
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/register",
    element: <ValidateForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <ValidatedForm />,
  },
  {
    path: "/todo",
    element: <TodoApp />,
  },
  {
    path: "/sampleapi",
    element: <SampleApi />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
