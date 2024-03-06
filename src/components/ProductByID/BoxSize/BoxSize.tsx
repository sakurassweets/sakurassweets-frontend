import { Product } from '../../../types/interfaces/Product';

interface BoxSizeProps {
  productDetails: Product;
}

export const BoxSize: React.FC<BoxSizeProps> = ({ productDetails }) => {
  console.log(productDetails);
  return (
    <div>
      <p>Оберіть розмір упаковки</p>
      <ul>
        <li>
          <p>12 шт</p>
          <p>{productDetails.price}</p>
        </li>
      </ul>
    </div>
  );
};
