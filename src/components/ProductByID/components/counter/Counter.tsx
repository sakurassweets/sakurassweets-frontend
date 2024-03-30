import { LuMinus, LuPlus } from 'react-icons/lu';
import classes from './counter.module.scss';
import { useState } from 'react';

export const Counter = () => {
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
      <div className={classes.counter}>
        <button type="button">
          <LuMinus className={classes.counter__icon} onClick={decrementCounter} />
        </button>
        <span id="value">{count}</span>
        <button type="button">
          <LuPlus className={classes.counter__icon} onClick={incrementCounter} />
        </button>
      </div>
    </>
  );
};
