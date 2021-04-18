import React from "react";
import { Provider } from "react-redux";
import { store } from "~/store";
import { renderHook } from "@testing-library/react-hooks";
import { useUser } from "~/store/slices/user/hooks";
import { userInitialState } from "~/store/slices/user/types";
import { act } from "react-test-renderer";

const wrapper: React.ComponentType = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("useUser", () => {
  test("初期状態", () => {
    const { result } = renderHook(() => useUser(), {
      wrapper
    });

    expect(result.current.user).toStrictEqual(userInitialState.user);
  });

  test("ユーザー取得", async () => {
    const { result } = renderHook(() => useUser(), {
      wrapper
    });

    await act(() => result.current.fetchUser("foo"));

    expect(result.current.user).toStrictEqual({
      id: "foo",
      name: "bar",
      age: 20
    });
  });
});
