import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { LuXCircle } from 'react-icons/lu';
import { Product } from '../../types/interfaces/Product';
import { CartStub } from './components/stub/CartStub';
import { Title } from '../Common/Title/Title';
import { FreeDelivery } from './components/freedelivery/FreeDelivery';
import { Button } from '../Common/Buttons';
import { CartTable } from './components/cartTable/CartTable';
import { calculateTotalAmount } from './helpers/total';
import classes from './cart.module.scss';

export const CartComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const currentAmount = calculateTotalAmount(products);

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
            <div className={classes.cart}>
              <CartTable setProducts={setProducts} />

              <p className={classes.cart__total}>
                Всього: <span className={classes.cart__amount}>{currentAmount}.00 грн</span>
              </p>
              <Button
                className={classes.cart__btn}
                onClick={() =>
                  toast.info('Cторінка в розробці', {
                    icon: '🚀',
                  })
                }
              >
                Оформити замовлення
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
