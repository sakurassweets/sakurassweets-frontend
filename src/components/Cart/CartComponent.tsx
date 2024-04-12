import { CartStub } from './components/stub/CartStub';
import { Title } from '../Common/Title/Title';
import { FreeDelivery } from './components/freedelivery/FreeDelivery';
import classes from './cart.module.scss';

export const CartComponent = () => {
  return (
    <section className="section">
      <div className="container">
        <Title className={classes.title}>Кошик</Title>
        <FreeDelivery />
        <CartStub />
      </div>
    </section>
  );
};
