import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';

import classes from './buttonAddToCart.module.scss';
import { Product } from '../../../../types/interfaces/Product';

interface ButtonAddToCartProps {
  product: Product;
}

export const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ product }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const onAddToCart = () => {
    console.log('Added to cart');
    setShowPopUp(true);
  };

  if (showPopUp) {
    toast.success(`Товар успішно доданий`);
  }

  return (
    <>
      <button className={classes.button} onClick={onAddToCart} disabled={!product.quantity_in_stock}>
        <FiShoppingCart className={classes.button__icon} />
        Додати до кошика
      </button>
    </>
  );
};
