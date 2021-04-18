import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "~/domain/entities/User";

const fetchUser = createAsyncThunk(
  "fetchUser",
  async (id: string): Promise<User> => {
    return { id, name: "bar", age: 20 };
  }
);

export const userAsyncReducers = {
  fetchUser
};
