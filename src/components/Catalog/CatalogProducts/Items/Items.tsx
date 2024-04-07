import { ProductCard } from '../../../Common';
import clases from './items.module.scss';
import { Product } from '../../../../types/interfaces/Product';

export const Items = ({ currentItems }: { currentItems: [] }) => {
  return (
    <div className={clases.items}>
      {!currentItems.length ? (
        <div className={clases.noitems_wrapper}>
          <h2>No items found</h2>
        </div>
      ) : (
        currentItems.map((item: Product, index: number) => (
          <div key={index}>
            <ProductCard product={item} />
          </div>
        ))
      )}
    </div>
  );
};
