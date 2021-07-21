import { mockBackend } from "__tests__/mocks/backend";
import { assetImpl } from "../repository/Asset";
import { userImpl } from "../repository/User";

const data = { user: userImpl, asset: assetImpl };

export type Backend = typeof data;

export const backend: Backend =
  process.env.NODE_ENV === "test" ? mockBackend : data;
