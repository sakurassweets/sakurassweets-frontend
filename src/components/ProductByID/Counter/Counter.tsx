import { LuMinus, LuPlus } from 'react-icons/lu';
import classes from './Counter.module.scss';

export const Counter = () => {
  return (
    <>
      <div className={classes.counter}>
        <button type="button">
          <LuMinus className={classes.counter__icon} />
        </button>
        <span id="value">1</span>
        <button type="button">
          <LuPlus className={classes.counter__icon} />
        </button>
      </div>
    </>
  );
};
