import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import classes from './counter.module.scss';

interface CounterProps {
  className: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className={`${classes.counter} ${className}`}>
        <button
          type="button"
          className={`${classes.counter__minus} ${count === 1 ? classes.counter__minus_disabled : ''}`}
          onClick={decrementCounter}
          disabled={count === 1}
        >
          <LuMinus className={`${classes.counter__icon} ${count === 1 ? classes.counter__icon_disabled : ''}`} />
        </button>
        <span id="value">{count}</span>
        <button type="button" className={classes.counter__plus} onClick={incrementCounter}>
          <LuPlus className={classes.counter__icon} />
        </button>
      </div>
    </>
  );
};
