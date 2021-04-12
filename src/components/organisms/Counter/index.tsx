import { useCounter } from "~/store/hooks/organisms/Counter";

export const Counter: React.FC = () => {
  const {
    count,
    onClickDecrementButton,
    onClickIncrementButton
  } = useCounter();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={onClickIncrementButton}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={onClickDecrementButton}>
          Decrement
        </button>
      </div>
    </div>
  );
};
