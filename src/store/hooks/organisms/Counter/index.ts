import { useCallback } from "react";
import { useCount } from "~/store/slices/count/hooks";

export const useCounter = () => {
  const { count, increment, decrement, setCount: set } = useCount();

  const onClickIncrementButton = useCallback(() => {
    increment();
  }, []);

  const onClickDecrementButton = useCallback(() => {
    decrement();
  }, []);

  const setCount = useCallback((num: number) => set(num), []);

  return { count, onClickIncrementButton, onClickDecrementButton, setCount };
};
