import { LuMinus, LuPlus } from 'react-icons/lu';
import classes from './counter.module.scss';
import { useState } from 'react';

interface CounterProps {
  className?: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  byID?: boolean;
}

export const Counter: React.FC<CounterProps> = ({ className, quantity, setQuantity, byID }) => {
  const [quantityByID, setQuantityByID] = useState(1);
  const incrementCounter = () => {
    if (quantity && !byID) {
      setQuantity(quantity + 1);
    } else {
      setQuantityByID(quantityByID + 1);
    }
  };

  const decrementCounter = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else if (quantityByID > 1) {
      setQuantityByID(quantityByID - 1);
    }
  };

  return (
    <>
      <div className={`${classes.counter} ${className}`}>
        <button
          type="button"
          className={`${classes.counter__minus} ${
            quantity === 1 && quantityByID === 1 ? classes.counter__minus_disabled : ''
          }`}
          onClick={decrementCounter}
          disabled={quantity === 1 && quantityByID === 1}
        >
          <LuMinus
            className={`${classes.counter__icon} ${
              quantity === 1 && quantityByID === 1 ? classes.counter__icon_disabled : ''
            }`}
          />
        </button>
        <span id="value">{!byID ? quantity : quantityByID}</span>
        <button type="button" className={classes.counter__plus} onClick={incrementCounter}>
          <LuPlus className={classes.counter__icon} />
        </button>
      </div>
    </>
  );
};
