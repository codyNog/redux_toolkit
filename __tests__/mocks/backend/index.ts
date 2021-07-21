import { Backend } from "~/domain/backend";
import { AssetUseCase } from "~/domain/repository/Asset";
import { userUseCase } from "~/domain/repository/User";

const mockUser = {
  id: "foo",
  name: "bar",
  age: 20
};

const mockAsset = {
  uid: "foo",
  name: "bar",
  value: 0
};

const user: userUseCase = {
  getUser: async (_) => mockUser
};

const asset: AssetUseCase = {
  getAssets: async () => [mockAsset],
  getAsset: async (_) => mockAsset
};

export const mockBackend: Backend = { user, asset };
