import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import CustService from "./services"
const initialState = [];

export const CreateCustomer = createAsyncThunk(
    "cust/create",
    async ({custid,custname,accno,add,phone,mail}) => {
      const res = await CustService.create({custid,custname,accno,add,phone,mail});
      console.log("resp" , res.data)
      return res.data;
      
    }
  );
  export const retrieveCustomer = createAsyncThunk(
    "cust/retrieve",
    async () => {
      const res = await CustService.getAll();
      console.log("resp" , res.data)
      return res.data;
      
    }
  );
  
  export const updateCustomer = createAsyncThunk(
    "cust/update",
    async ({ id, data }) => {
      const res = await CustService.update(id, data);
      return res.data;

    }
  );
  export const deleteCustomer = createAsyncThunk(
    "cust/delete",
    async ({ id }) => {
      await CustService.remove(id);
      console.log("deleted" ,id )
      return { id };
    }
  );
 
  const custSlice = createSlice({
    name: "customer",
    initialState,
    extraReducers: {
      [CreateCustomer.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [retrieveCustomer.fulfilled]: (state, action) => {
        return [...action.payload];
        
      },
      [deleteCustomer.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
        
      },
      [updateCustomer.fulfilled]: (state, action) => {
        const index = state.findIndex(cust => cust.custid === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
  
    },
    
  }});

  
  

  
export default custSlice.reducer;

  