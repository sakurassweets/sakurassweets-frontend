import { useEffect, useState } from 'react';
import { LuXCircle } from 'react-icons/lu';
import { Product } from '../../types/interfaces/Product';
import { Title, Button } from '../Common/index';
import { CartTable, FreeDelivery, CartStub } from './components/index';
import { calculateTotalAmount } from './helpers/total';
import { OrderSuccess } from '../OrderSuccess/OrderSuccess';
import classes from './cart.module.scss';

export const CartComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const currentAmount = calculateTotalAmount(products);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('cart');
    setProducts([]);
  };

  const totalByID = (products: Product[], id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) {
      return 0;
    }

    const price = product.priceWithDiscount ?? parseFloat(product.price);
    const total = price * product.quantity;
    return total;
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
              <CartTable totalByID={totalByID} />
              <p className={classes.cart__total}>
                Всього: <span className={classes.cart__amount}>{currentAmount}.00 грн</span>
              </p>
              <Button className={classes.cart__btn} onClick={() => setIsOpen(true)}>
                Оформити замовлення
              </Button>
              {isOpen && <OrderSuccess onClose={() => setIsOpen(false)} open={isOpen} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
