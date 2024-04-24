import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';

import classes from './buttonAddToCart.module.scss';
import { Product } from '../../../../types/interfaces/Product';

interface ButtonAddToCartProps {
  product: Product;
}

export const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ product }) => {
  const [, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  const onAddToCart = () => {
    setProducts((prevProducts) => {
      if (prevProducts.some((p) => p.id === product.id)) {
        toast.warning('Товар уже доданий до кошика');
        return prevProducts;
      }
      const updatedProducts = [...prevProducts, product];
      localStorage.setItem('cart', JSON.stringify(updatedProducts));
      toast.success(`Товар успішно доданий`);
      return updatedProducts;
    });
  };

  return (
    <>
      <button className={classes.button} onClick={onAddToCart} disabled={!product.quantity_in_stock}>
        <FiShoppingCart className={classes.button__icon} />
        Додати до кошика
      </button>
    </>
  );
};
