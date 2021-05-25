import { userImpl } from "../repository/User";

export const backend = () => {
  return { user: userImpl };
};

const backendType = backend();
export type Backend = typeof backendType;
