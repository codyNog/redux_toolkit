import { User } from "~/domain/entities/User";

export interface UserState {
  user: User;
}

const user: User = { id: "", name: "", age: 0 };

export const userInitialState: UserState = { user };
