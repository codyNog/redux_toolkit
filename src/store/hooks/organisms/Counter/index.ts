import { useCount } from "~/store/slices/count/hooks";

export const useCounter = () => {
  const { count, increment, decrement } = useCount();

  const onClickIncrementButton = () => {
    increment();
  };

  const onClickDecrementButton = () => {
    decrement();
  };

  return { count, onClickIncrementButton, onClickDecrementButton };
};
