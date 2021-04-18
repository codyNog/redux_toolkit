import { createSlice } from "@reduxjs/toolkit";
import { countReducers } from "./reducers";
import { counterInitialState } from "./types";

export const countSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: { ...countReducers }
});
