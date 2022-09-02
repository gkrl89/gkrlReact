import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { DataContext } from "./DataContext";
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux"
import store from "../src/Redux/store"




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>


{/* <DataContext.Provider value="You are accessing Product Information."> */}
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
    {/* </DataContext.Provider> */}
  </React.StrictMode>
 
 
);
// const rootportal = ReactDOM.createRoot(document.getElementById('portal'));
// rootportal.render(
//   <React.StrictMode>
//     <h1>rootportal</h1>
//   </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
