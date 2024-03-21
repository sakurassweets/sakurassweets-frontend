import { FiShoppingCart } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import classes from './buttonAddToCart.module.scss';

export const ButtonAddToCart = () => {
  const onAddToCart = () => {
    console.log('Added to cart');
    setShowPopUp(true);
  };

  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showPopUp]);

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
