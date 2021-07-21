import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "~/store";
import { userAsyncReducers } from "../reducers";

export const useUser = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const fetchUser = useCallback(
    async (value: string) => dispatch(userAsyncReducers.fetchUser(value)),
    [dispatch]
  );

  return { user, fetchUser };
};
