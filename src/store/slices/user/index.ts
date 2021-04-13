import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  age: number;
}

interface UserState {
  user: User;
}

const user: User = { id: "", name: "", age: 0 };

const initialState: UserState = { user };

export const fetchUser = createAsyncThunk("fetchUser", async (id: string) => {
  return { id, name: "bar", age: 20 };
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (_state, _action) => {});
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (_state, _action) => {});
  }
});
