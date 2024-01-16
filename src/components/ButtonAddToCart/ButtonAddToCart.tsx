import { FiShoppingCart } from 'react-icons/fi';

import classes from './ButtonAddToCart.module.scss';

const ButtonAddToCart = () => {
  const onAddToCart = () => {
    console.log('Added to cart');
  };

  return (
    <button className={classes.button} onClick={onAddToCart}>
      <FiShoppingCart className={classes.button__icon} />
      Додати до кошика
    </button>
  );
};

export default ButtonAddToCart;
