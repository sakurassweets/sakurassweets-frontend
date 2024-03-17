import classNames from 'classnames';
import { Product } from '../../../types/interfaces/Product';
import classes from './Discount.module.scss';
import { calculateDiscountedPrice, hasDiscount } from './helpers';

interface DiscountProps {
  product: Product;
  isProductPage?: boolean;
}

export const Discount: React.FC<DiscountProps> = ({ product, isProductPage }) => {
  const discountValue = product.discount ? product.discount.replace('%', '') : '0';
  const finalPrice = calculateDiscountedPrice(product.price, discountValue);

  const priceClass = classNames(classes.card__discountPrice, {
    [classes.notDiscountPrice_home]: !hasDiscount(product.discount) && !isProductPage,
    [classes.card__discountPrice_product]: isProductPage && hasDiscount(product.discount),
    [classes.discountPrice_home]: !isProductPage && hasDiscount(product.discount),
  });

  const totalPriceClass = classNames({
    [classes.card__totalPrice_product]: isProductPage,
    [classes.totalPrice_home]: !isProductPage,
  });

  return (
    <div>
      {hasDiscount(product.discount) && <p className={totalPriceClass}> {product.price} грн</p>}
      <p className={priceClass}>{finalPrice} грн</p>
    </div>
  );
};
