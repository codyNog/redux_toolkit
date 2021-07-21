import React from "react";
import { Provider } from "react-redux";
import { store } from "~/store";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "~/store/hooks/organisms/Counter";

const wrapper: React.ComponentType = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("useCounter", () => {
  test("初期状態", () => {
    const { result } = renderHook(() => useCounter(), { wrapper });
    expect(result.current.count).toBe(0);
  });

  test("インクリメント", () => {
    const { result } = renderHook(() => useCounter(), { wrapper });

    act(() => {
      result.current.onClickIncrementButton();
    });

    expect(result.current.count).toBe(1);
  });

  test("デクリメント", () => {
    const { result } = renderHook(() => useCounter(), { wrapper });

    act(() => {
      result.current.onClickDecrementButton();
    });

    expect(result.current.count).toBe(0);
  });

  test("任意の値を設定できる", () => {
    const { result } = renderHook(() => useCounter(), { wrapper });

    act(() => {
      result.current.setCount(10);
    });

    expect(result.current.count).toBe(10);
  });
});
