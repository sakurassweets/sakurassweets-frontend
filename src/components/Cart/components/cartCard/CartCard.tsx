import { Product } from '../../../../types/interfaces/Product';
import classes from './cartList.module.scss';

interface CartCardProps {
  product: Product;
}

export const CartCard = ({ product }: CartCardProps) => {
  return <div>CartList</div>;
};
