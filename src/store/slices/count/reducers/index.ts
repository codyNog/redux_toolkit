import { PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../types";

const setCount = (state: CounterState, action: PayloadAction<number>) => {
  state.value = action.payload;
};

const increment = (state: CounterState) => {
  state.value += 1;
};

const decrement = (state: CounterState) => {
  state.value -= 1;
};

const incrementByAmount = (
  state: CounterState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};

export const countReducers = {
  setCount,
  increment,
  decrement,
  incrementByAmount
};
