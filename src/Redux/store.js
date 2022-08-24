import {configureStore} from "@reduxjs/toolkit";
import custReducer from "./slices";

const reducer = {
    Customer: custReducer
  }
  
  const store = configureStore({
    reducer: reducer,
    devTools: true,
  })
  
  export default store;
  
  
  