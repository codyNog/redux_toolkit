import { User } from "~/domain/entities/User";

const getUser = async (id: string): Promise<User> => {
  return (await fetch(`/user/${id}`)).json();
};

export const userImpl = {
  getUser
};

export type userUseCase = typeof userImpl;
