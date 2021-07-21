import { renderHook } from "@testing-library/react-hooks";
import { useGlobal } from "~/store/hooks/global";

describe("useUserItem", () => {
  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGlobal());

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
