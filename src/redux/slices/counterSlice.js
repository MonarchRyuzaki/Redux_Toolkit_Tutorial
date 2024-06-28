import { createSelector, createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        // YE SAB CASE REDUCERS HAIN
        increment: state => state+1,
        decrement: state => state-1
    }
})
// CASE REDUCERS ARE CONVERTED TO ACTION AFTER CREATING SLICE
console.log(counter);

export const counterSelector = createSelector(
    state=>state.counter,
    state => state
)

export const {increment, decrement} = counter.actions

export default counter.reducer
