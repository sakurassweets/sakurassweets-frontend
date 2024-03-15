import classNames from 'classnames';
import { Product } from '../../../types/interfaces/Product';
import classes from './Discount.module.scss';
import { calculateDiscountedPrice, hasDiscount } from './helpers';

interface DiscountProps {
  product: Product;
  className?: string;
}

export const Discount: React.FC<DiscountProps> = ({ product }) => {
  const finalPrice = calculateDiscountedPrice(product.price, product.discount.replace('%', ''));

  const priceClass = classNames(classes.card__price, {
    [classes.card__price_noDiscount]: !hasDiscount(product.discount),
  });
  return (
    <div>
      {hasDiscount(product.discount) && <p className={classes.card__fullPrice}> {product.price} грн</p>}
      <p className={priceClass}>{finalPrice} грн</p>
    </div>
  );
};
