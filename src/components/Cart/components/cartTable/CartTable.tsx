import { LuXCircle } from 'react-icons/lu';
import { Product } from '../../../../types/interfaces/Product';
import { Discount, InStock } from '../../../Common';
import { Button } from '../../../Common/Buttons';
import { Counter } from '../../../ProductByID';
import defaultImage from '../../../../assets/img/no-image.png';
import classes from './cartTable.module.scss';
import useCart from '../../../../helpers/hooks/useCart';

interface CartTableProps {
  totalByID: (products: Product[], id: number) => number;
}

export const CartTable: React.FC<CartTableProps> = ({ totalByID }) => {
  const tableHeaders = ['Товар', 'Ціна', 'Кількість', 'Всього', ' '];
  const { products, updateQuantity, removeProductById } = useCart();

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
              <Counter
                quantity={product.quantity}
                setQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
                className={classes.cart__counter}
              />
            </td>
            <td>
              <p className={classes.cart__total}>{totalByID(products, product.id)} грн</p>
            </td>
            <td>
              <Button className={classes.clear_btn} onClick={() => removeProductById(product.id)}>
                <LuXCircle />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
