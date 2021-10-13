import { createSlice } from "@reduxjs/toolkit";
import { userAsyncReducers } from "~/store/slices/user/reducers";
import { userInitialState } from "./types";

const { fetchUser, fetchUsers } = userAsyncReducers;

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (_state, _action) => {});
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (_state, _action) => {});
    builder.addCase(fetchUsers.pending, (_state, _action) => {});
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (_state, _action) => {});
  }
});
