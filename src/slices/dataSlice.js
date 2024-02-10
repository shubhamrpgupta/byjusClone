import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "Data",
    initialState: [],
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const { addData } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;