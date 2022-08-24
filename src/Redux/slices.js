import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import CustService from "./services"
const initialState = [];

export const CreateCustomer = createAsyncThunk(
    "cust/create",
    async ({custid,custname,accno,add,phone,mail}) => {
      const res = await CustService.create({custid,custname,accno,add,phone,mail});
      return res.data;
    }
  );
  export const retrieveCustomer = createAsyncThunk(
    "cust/retrieve",
    async () => {
      const res = await CustService.getAll();
      return res.data;
      console.log("response",res.data)
    }
  );
//   export const updateTutorial = createAsyncThunk(
//     "cust/update",
//     async ({ id, data }) => {
//       const res = await CustService.update(id, data);
//       return res.data;
//     }
//   );
//   export const deleteTutorial = createAsyncThunk(
//     "cust/delete",
//     async ({ id }) => {
//       await CustService.remove(id);
//       return { id };
//     }
//   );
 
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
    //   [updateTutorial.fulfilled]: (state, action) => {
    //     const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
    //     state[index] = {
    //       ...state[index],
    //       ...action.payload,
    //     };
    //   },
    //   [deleteTutorial.fulfilled]: (state, action) => {
    //     let index = state.findIndex(({ id }) => id === action.payload.id);
    //     state.splice(index, 1);
    //   },
    //   [deleteAllTutorials.fulfilled]: (state, action) => {
    //     return [];
    //   },
    //   [findTutorialsByTitle.fulfilled]: (state, action) => {
    //     return [...action.payload];
    //   },
    // },
  }});

  
  
  
export const {addCust , retrieveCust} = custSlice.actions;
export default custSlice.reducer;  