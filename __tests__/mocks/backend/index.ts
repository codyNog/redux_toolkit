import * as backendModule from "~/domain/backend";
import { Backend } from "~/domain/backend";
import { userUseCase } from "~/domain/repository/User";

const mockUser = {
  id: "foo",
  name: "bar",
  age: 20
};

const user: userUseCase = {
  getUser: async (_) => mockUser
};

const mockBackend: Backend = { user };

export const spyBackend = () => {
  jest.spyOn(backendModule, "backend").mockReturnValue(mockBackend);
};
