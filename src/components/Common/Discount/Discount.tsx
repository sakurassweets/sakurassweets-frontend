import classNames from 'classnames';
import { Product } from '../../../types/interfaces/Product';
import { hasDiscount } from './helpers';

import classes from './discount.module.scss';

interface DiscountProps {
  product: Product;
  isProductPage?: boolean;
  isCartPage?: boolean;
  className?: string;
}

export const Discount: React.FC<DiscountProps> = ({ product, isProductPage, isCartPage, className }) => {
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
    <>
      {!isCartPage && (
        <div>
          {hasDiscount(product.discount) && <p className={totalPriceClass}>{product.price} грн</p>}
          <p className={priceClass}>{product.priceWithDiscount} грн</p>
        </div>
      )}

      {isCartPage && <p className={className}>{product.priceWithDiscount} грн</p>}
    </>
  );
};
