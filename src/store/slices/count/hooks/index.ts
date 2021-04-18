import { useAppDispatch, useAppSelector } from "~/store";
import { countSlice } from "~/store/slices/count";

export const useCount = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { increment: incr, decrement: decr } = countSlice.actions;

  const increment = () => dispatch(incr());
  const decrement = () => dispatch(decr());

  return { count, increment, decrement };
};
