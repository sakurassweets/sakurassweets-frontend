import { useEffect, useState } from 'react';
import { Product } from '../../types/interfaces/Product';
import { CartStub } from './components/stub/CartStub';
import { Title } from '../Common/Title/Title';
import { FreeDelivery } from './components/freedelivery/FreeDelivery';
import { CartCard } from './components/cartCard/CartCard';
import classes from './cart.module.scss';
import { Button } from '../Common/Buttons';
import { LuXCircle } from 'react-icons/lu';
// import useStorage from '../../helpers/hooks/useStorage';

export const CartComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setProducts([]);
  };

  // const currentAmount = products.reduce((total, product) => total + Number(product.price), 0);

  return (
    <section className="section">
      <div className="container">
        <Title className={classes.title}>Кошик</Title>
        <FreeDelivery products={products} />
        {!products.length ? (
          <CartStub />
        ) : (
          <div>
            {products.length ? (
              <Button className={classes.clear_btn} onClick={clearLocalStorage}>
                <LuXCircle />
                Очистити все
              </Button>
            ) : null}
            <ul className={classes.fav__list}>
              {products.map((product) => (
                <CartCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
