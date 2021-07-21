import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { AssetContext, useGlobal } from "~/store/hooks/global";
import { useAssetList } from "~/store/hooks/organisms/AssetList";

const wrapper: React.ComponentType = ({ children }) => {
  const { assets } = useGlobal();
  return (
    <AssetContext.Provider value={{ assets }}>{children}</AssetContext.Provider>
  );
};

describe("useAssetList", () => {
  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAssetList(), {
      wrapper
    });

    await waitForNextUpdate();

    expect(result.current.assets).toStrictEqual([
      {
        uid: "foo",
        name: "bar",
        value: 0
      }
    ]);
  });
});
