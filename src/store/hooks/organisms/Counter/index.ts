import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "~/store";
import { counterSlice } from "~/store/slices/counter";

export const useCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { increment, decrement } = counterSlice.actions;

  const onClickIncrementButton = useCallback(() => {
    dispatch(increment());
  }, []);

  const onClickDecrementButton = useCallback(() => {
    dispatch(decrement());
  }, []);

  return { count, onClickIncrementButton, onClickDecrementButton };
};
