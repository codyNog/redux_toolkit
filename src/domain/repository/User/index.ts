import { User } from "~/domain/entities/User";

const getUser = async (id: string): Promise<User> => {
  return (await fetch(`/user/${id}`)).json();
};

const getUsers = async (): Promise<User[]> => {
  return [];
};

export const userImpl = {
  getUser,
  getUsers
};

export type userUseCase = typeof userImpl;
