import { LuCheck, LuX } from 'react-icons/lu';
import classNames from 'classnames';
import { Product } from '../../../types/interfaces/Product';
import classes from './InStock.module.scss';

interface InStockProps {
  product: Product;
}

export const InStock: React.FC<InStockProps> = ({ product }) => {
  return (
    <div className={classes.inStockThumb}>
      {product.quantity_in_stock ? (
        <>
          <LuCheck className={classes.inStockThumb__iconInStock} />
          <p className={classes.inStockThumb__textInStock}>В наявності</p>
        </>
      ) : (
        <>
          <LuX className={classes.inStockThumb__iconOutOfStock} />
          <p
            className={classNames(classes.inStockThumb__textInStock, { [classes.inStockThumb__textOutOfStock]: true })}
          >
            Немає в наявності
          </p>
        </>
      )}
    </div>
  );
};
