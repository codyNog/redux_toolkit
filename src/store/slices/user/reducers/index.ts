import { createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "~/domain/backend";

const fetchUser = createAsyncThunk("fetchUser", async (id: string) => {
  return backend.user.getUser(id);
});

const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  return await backend.user.getUsers();
});

export const userAsyncReducers = {
  fetchUser,
  fetchUsers
};
