import React from "react";
import { Provider } from "react-redux";
import { store } from "~/store";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCount } from "~/store/slices/count/hooks";

const wrapper: React.ComponentType = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("count", () => {
  test("初期状態", () => {
    const { result } = renderHook(() => useCount(), { wrapper });

    expect(result.current.count).toBe(0);
  });

  test("インクリメント", () => {
    const { result } = renderHook(() => useCount(), { wrapper });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("デクリメント", () => {
    const { result } = renderHook(() => useCount(), { wrapper });

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });
});
