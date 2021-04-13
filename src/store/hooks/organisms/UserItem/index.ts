import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/store";
import { fetchUser } from "~/store/slices/user";

export const useUserItem = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser("foo"));
  }, []);

  return { user };
};
