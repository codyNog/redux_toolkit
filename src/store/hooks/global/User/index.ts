import { useState, useCallback } from "react";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entities/User";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const users = await backend.user.getUsers();
    setUsers(users);
  }, []);

  return { users, fetchUsers };
};
