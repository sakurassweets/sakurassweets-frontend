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
