import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;
