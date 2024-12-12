// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: { value: 0 }, // Initial state
  reducers: {
    increment: (state) => {
      state.value += 1; // Action to increment
    },
    decrement: (state) => {
      state.value -= 1; // Action to decrement
    },
    reset: (state) => {
      state.value = 0; // Action to reset
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; // Export actions
export default counterSlice.reducer; // Export reducer
