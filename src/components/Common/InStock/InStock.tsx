import { LuCheck, LuX } from 'react-icons/lu';
import classNames from 'classnames';
import { Product } from '../../../types/interfaces/Product';
import classes from './InStock.module.scss';

interface InStockProps {
  product: Product;
}

export const InStock: React.FC<InStockProps> = ({ product }) => {
  return (
    <div className={classes.wrapper}>
      {product.quantity_in_stock ? (
        <>
          <LuCheck className={classes.wrapper__iconInStock} />
          <p className={classes.wrapper__textInStock}>В наявності</p>
        </>
      ) : (
        <>
          <LuX className={classes.wrapper__iconOutOfStock} />
          <p className={classNames(classes.wrapper__textInStock, { [classes.wrapper__textOutOfStock]: true })}>
            Немає в наявності
          </p>
        </>
      )}
    </div>
  );
};
