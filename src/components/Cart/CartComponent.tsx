import { useEffect, useState } from 'react';
import { Product } from '../../types/interfaces/Product';
import { CartStub } from './components/stub/CartStub';
import { Title } from '../Common/Title/Title';
import { FreeDelivery } from './components/freedelivery/FreeDelivery';
import classes from './cart.module.scss';
import { Button } from '../Common/Buttons';
import { LuXCircle } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { calculateTotalAmount } from './helpers/total';
import { CartTable } from './components/cartTable/CartTable';
// import useStorage from '../../helpers/hooks/useStorage';

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
            <div className={classes.cart}>
              <CartTable products={products} currentAmount={currentAmount} />

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
