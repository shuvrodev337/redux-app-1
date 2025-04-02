import { createSlice } from "@reduxjs/toolkit";
interface ICounterType {
  value: number;
}

const initialState: ICounterType = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // what action will be taken for coresponding actions.. will be defined here
    // increment, decrement are actions
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
