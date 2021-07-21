import { createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "~/domain/backend";

const fetchUser = createAsyncThunk("fetchUser", async (id: string) => {
  return backend.user.getUser(id);
});

export const userAsyncReducers = {
  fetchUser
};
