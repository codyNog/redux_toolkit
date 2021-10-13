import { useEffect } from "react";
import { GlobalStore } from "../../global";

export const useUserList = () => {
  const { users, fetchUsers } = GlobalStore.useContainer().userStore;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users };
};
