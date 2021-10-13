import { User } from "~/domain/entities/User";

export interface UserState {
  user: User;
  users: User[];
}

const user: User = { id: "", name: "", age: 0 };
const users: User[] = [];

export const userInitialState: UserState = { user, users };
