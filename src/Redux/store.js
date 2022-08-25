import {configureStore} from "@reduxjs/toolkit";
import custSlice from "./slices";


  
  const store = configureStore({
    reducer: {custstate : custSlice},
    devTools: true,
  })
  
  export default store;
  
  
  