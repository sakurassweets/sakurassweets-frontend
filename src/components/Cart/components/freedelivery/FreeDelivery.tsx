import { LuTruck } from 'react-icons/lu';
import classes from './freeDelivery.module.scss';
import { FREE } from '../../../../constants';
import { Product } from '../../../../types/interfaces/Product';

interface FreeDeliveryProps {
  products: Product[];
}
export const FreeDelivery: React.FC<FreeDeliveryProps> = ({ products }) => {
  const totalForFreeDelivery: number = FREE;

  const currentAmount = products.reduce((total, product) => total + Number(product.price), 0);

  const remainingAmount = totalForFreeDelivery - currentAmount;
  console.log('currentAmount', currentAmount);
  return (
    <div className={classes.wrapper}>
      <div className={classes.text_thumb}>
        <LuTruck className={classes.svg} />
        {currentAmount >= totalForFreeDelivery && <p>Вітаємо! Доставка за наш рахунок!</p>}
        {(!currentAmount || currentAmount <= totalForFreeDelivery) && (
          <p className={classes.text}>
            До безкоштовної доставки залишилось лише {remainingAmount} грн! Поповніть свій кошик японськими ласощами та
            отримайте безкоштовну доставку!
          </p>
        )}
      </div>
      <div className={classes.progress_thumb}>
        <progress className={classes.progress} value={currentAmount} max={FREE}></progress>
        {currentAmount > 0 && currentAmount < FREE && <span>{currentAmount.toFixed(2)} грн</span>}
        {currentAmount >= FREE && <span>Безкоштовна доставка!</span>}
        <p>{FREE}.00 грн</p>
      </div>
    </div>
  );
};
