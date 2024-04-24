import { LuMinus, LuPlus } from 'react-icons/lu';
import classes from './counter.module.scss';

interface CounterProps {
  className?: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const Counter: React.FC<CounterProps> = ({ className, quantity = 1, setQuantity }) => {
  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity > 1 && setQuantity) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className={`${classes.counter} ${className}`}>
        <button
          type="button"
          className={`${classes.counter__minus} ${quantity === 1 ? classes.counter__minus_disabled : ''}`}
          onClick={decrementCounter}
          disabled={quantity === 1}
        >
          <LuMinus className={`${classes.counter__icon} ${quantity === 1 ? classes.counter__icon_disabled : ''}`} />
        </button>
        <span id="value">{quantity}</span>
        <button type="button" className={classes.counter__plus} onClick={incrementCounter}>
          <LuPlus className={classes.counter__icon} />
        </button>
      </div>
    </>
  );
};
