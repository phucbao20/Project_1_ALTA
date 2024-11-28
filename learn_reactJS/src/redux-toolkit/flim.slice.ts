import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Importing necessary functions from Redux Toolkit
import { IFlim } from "../type/flim";
import { FlimService } from "../api/service/flim.service";

// Defining the shape of the state for the pharmacist profile
interface FlimState {
    flimList: IFlim[]; // The unique identifier for the pharmacist
    flimById: IFlim;
}

// Initial state of the pharmacist, with default values
const initialState: FlimState = {
    flimById: {} as IFlim,
    flimList: [], // Initially no pharmacist ID

}

export const getFlimList = createAsyncThunk(
    'flim/getFlimList',
    async () => {
      const responce = await FlimService.getAll();
      return responce;
    }
)

// Creating a slice of the Redux store to manage the pharmacist state
const flimSlice = createSlice({
    name: 'pharmacist', // The name of the slice, used in the reducer
    initialState, // The initial state of the slice
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getFlimList.fulfilled, (state, action) => {
            state.flimList = action.payload as IFlim[]
        })
    },
})

// Exporting the reducer to be used in the store configuration
const flimReducer = flimSlice.reducer;


// Exporting the reducer as the default export to integrate into the Redux store
export default flimReducer;
