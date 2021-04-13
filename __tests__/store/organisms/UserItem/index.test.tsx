import React from "react";
import { Provider } from "react-redux";
import { store } from "~/store";
import { renderHook } from "@testing-library/react-hooks";
import { useUserItem } from "~/store/hooks/organisms/UserItem";

const wrapper: React.ComponentType = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("useUserItem", () => {
  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserItem(), {
      wrapper
    });

    await waitForNextUpdate();

    expect(result.current.user).toStrictEqual({
      id: "foo",
      name: "bar",
      age: 20
    });
  });
});
