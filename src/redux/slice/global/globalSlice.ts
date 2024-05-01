import {createSlice} from '@reduxjs/toolkit';

type globalState = {
  firstNumber: number;
  secondNumber: number;
  numbers: number[];
};

const initialState: globalState = {
  firstNumber: 0,
  secondNumber: 0,
  numbers: [],
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addToFirst: state => {
      state.firstNumber++;
      state.numbers = [state.firstNumber];
    },
    addToSecond: state => {
      state.secondNumber++;
      state.numbers = [state.firstNumber];
    },
    doNoThing: state => ({...state}),
  },
});

export const {addToFirst, addToSecond, doNoThing} = globalSlice.actions;
export default globalSlice.reducer;
