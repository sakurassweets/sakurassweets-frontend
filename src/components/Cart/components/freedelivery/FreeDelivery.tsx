import { LuTruck } from 'react-icons/lu';
import classes from './freeDelivery.module.scss';
import { FREE } from '../../../../constants';
import { useEffect, useState } from 'react';

export const FreeDelivery = () => {
  const totalForFreeDelivery: number = 1200;
  const [currentAmount, setCurrentAmount] = useState(0);
  const remainingAmount = totalForFreeDelivery - currentAmount;

  useEffect(() => {
    setCurrentAmount(0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.text_thumb}>
        <LuTruck className={classes.svg} />
        <p className={classes.text}>
          До безкоштовної доставки залишилось лише {remainingAmount} грн! Поповніть свій кошик японськими ласощами та
          отримайте безкоштовну доставку!
        </p>
      </div>
      <div className={classes.progress_thumb}>
        <progress className={classes.progress} value={currentAmount} max={FREE}></progress>

        {currentAmount > 0 && <span>{currentAmount.toFixed(2)} грн</span>}
        <p>{FREE} грн</p>
      </div>
    </div>
  );
};
