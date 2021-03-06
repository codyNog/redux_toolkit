import { renderHook } from "@testing-library/react-hooks";
import { useGlobal } from "~/store/hooks/global";

describe("useUserItem", () => {
  test("εζηΆζ", async () => {
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
