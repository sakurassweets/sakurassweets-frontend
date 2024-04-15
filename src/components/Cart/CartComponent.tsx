import { CartStub } from './components/stub/CartStub';
import { Title } from '../Common/Title/Title';
import { FreeDelivery } from './components/freedelivery/FreeDelivery';
import classes from './cart.module.scss';
import { useEffect, useState } from 'react';
import { Product } from '../../types/interfaces/Product';
import { ProductCard } from '../Common';

export const CartComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  const currentAmount = products.reduce((total, product) => total + Number(product.price), 0);

  return (
    <section className="section">
      <div className="container">
        <Title className={classes.title}>Кошик</Title>
        <FreeDelivery currentAmount={currentAmount} />
        {!products.length ? (
          <CartStub />
        ) : (
          <ul className={classes.fav__list}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
