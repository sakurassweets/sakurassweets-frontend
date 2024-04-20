import { LuXCircle } from 'react-icons/lu';
import { Product } from '../../../../types/interfaces/Product';
import { Button } from '../../../Common/Buttons';
import classes from './cartCard.module.scss';
import { toast } from 'react-toastify';
import defaultImage from '../../../../assets/img/no-image.png';
import { Discount, InStock } from '../../../Common';
import { Counter } from '../../../ProductByID';

interface CartCardProps {
  product: Product;
  currentAmount: number;
}

export const CartCard = ({ product, currentAmount }: CartCardProps) => {
  return (
    <div>
      <div className={classes.cart__wrapper}>
        {product.images.length > 0 ? (
          <img
            src={product.images[0].image}
            alt={product.title}
            className={classes.cart__img}
            width={100}
            height={100}
          />
        ) : (
          <img src={defaultImage} alt="default Image" className={classes.cart__img} width={100} height={100} />
        )}
        <div className={classes.cart__text_wrapper}>
          <p className={classes.cart__title}>{product.title}</p>
          <InStock product={product} />
        </div>
      </div>
      <Discount product={product} />
      <Counter />
      <p className={classes.cart__title}>{product.title}</p>
      <Button
        className={classes.clear_btn}
        onClick={() =>
          toast.info('Cторінка в розробці', {
            icon: '🚀',
          })
        }
      >
        <LuXCircle />
      </Button>
    </div>
  );
};
