import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "~/store";
import { countSlice } from "~/store/slices/count";

export const useCount = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const {
    increment: incr,
    decrement: decr,
    setCount: set
  } = countSlice.actions;

  const increment = useCallback(() => dispatch(incr()), [dispatch]);
  const decrement = useCallback(() => dispatch(decr()), [dispatch]);
  const setCount = useCallback((value: number) => dispatch(set(value)), [
    dispatch
  ]);

  return { count, increment, decrement, setCount };
};
