import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "~/store";
import { userAsyncReducers } from "../reducers";

export const useUser = () => {
  const { user, users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const fetchUser = useCallback(
    async (value: string) => dispatch(userAsyncReducers.fetchUser(value)),
    [dispatch]
  );

  const fetchUsers = useCallback(() => {
    dispatch(userAsyncReducers.fetchUsers());
  }, [dispatch]);

  return { user, fetchUser, users, fetchUsers };
};
