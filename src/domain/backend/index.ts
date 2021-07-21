import { mockBackend } from "__tests__/mocks/backend";
import { userImpl } from "../repository/User";

const data = { user: userImpl };

export type Backend = typeof data;

export const backend: Backend =
  process.env.NODE_ENV === "test" ? mockBackend : { user: userImpl };
