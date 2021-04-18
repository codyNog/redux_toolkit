import { useEffect } from "react";
import { useUser } from "~/store/slices/user/hooks";

export const useUserItem = () => {
  const { user, fetchUser } = useUser();

  useEffect(() => {
    fetchUser("foo");
  }, []);

  return { user };
};
