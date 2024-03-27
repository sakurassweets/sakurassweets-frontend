import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';

import classes from './buttonAddToCart.module.scss';

export const ButtonAddToCart = () => {
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
      <button className={classes.button} onClick={onAddToCart}>
        <FiShoppingCart className={classes.button__icon} />
        Додати до кошика
      </button>
    </>
  );
};
