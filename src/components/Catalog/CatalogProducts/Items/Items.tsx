import { ProductCard } from '../../../Common';
import clases from './items.module.scss';
import { Product } from '../../../../types/interfaces/Product';

interface ItemsProps {
  currentItems: Product[];
}

export const Items = ({ currentItems }: ItemsProps) => {
  return (
    <div className={clases.items}>
      {!currentItems.length ? (
        <div className={clases.noitems_wrapper}>
          <h2>No items found</h2>
        </div>
      ) : (
        currentItems.map((item: Product, index: number) => <ProductCard product={item} key={index} />)
      )}
    </div>
  );
};
