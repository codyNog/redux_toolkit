import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk("fetchUser", async (id: string) => {
  return { id, name: "bar", age: 20 };
});

export const userAsyncReducers = {
  fetchUser
};
