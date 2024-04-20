import { Product } from '../../../../types/interfaces/Product';
import { Discount, InStock } from '../../../Common';
import { Counter } from '../../../ProductByID';
import defaultImage from '../../../../assets/img/no-image.png';
import classes from './cartTable.module.scss';
import { Button } from '../../../Common/Buttons';
import { toast } from 'react-toastify';
import { LuXCircle } from 'react-icons/lu';

interface CartTableProps {
  products: Product[];
  currentAmount?: number;
}

export const CartTable: React.FC<CartTableProps> = ({ products }) => {
  const tableHeaders = ['Товар', 'Ціна', 'Кількість', 'Всього', ' '];
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header} scope="col" className={classes.cart__header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">
              <div className={classes.cart__wrapper}>
                {product.images.length > 0 ? (
                  <div className={classes.cart__img_wrapper}>
                    <img
                      src={product.images[0].image}
                      alt={product.title}
                      className={classes.cart__img}
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <img src={defaultImage} alt="default Image" className={classes.cart__img} width={100} height={100} />
                )}
                <div className={classes.cart__text_wrapper}>
                  <p className={classes.cart__title}>{product.title}</p>
                  <InStock product={product} />
                </div>
              </div>
            </th>
            <td>
              <Discount product={product} isCartPage={true} className={classes.cart__discount} />
            </td>
            <td>
              <Counter className={classes.cart__counter} />
            </td>
            <td>
              <p className={classes.cart__total}>500.00 грн</p>
            </td>
            <td>
              <Button
                className={classes.clear_btn}
                onClick={() =>
                  toast.info('Функціонал в розробці', {
                    icon: '🚀',
                  })
                }
              >
                <LuXCircle />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
