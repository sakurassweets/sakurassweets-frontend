import { ProductCard } from '../../../Common';
import clases from '../CatalogProducts.module.scss';
import { SkeletonProductCard } from '../../../Common';
import { Key } from 'react';
import { Product } from '../../../../types/interfaces/Product';

export const Items = ({ currentItems }) => {
  return (
    <div className={clases.items}>
      {!currentItems.length
        ? Array.from({ length: 4 }).map((_, index) => <SkeletonProductCard key={index} />)
        : currentItems.map((item: Product, index: Key | null | undefined) => (
            <div key={index}>
              <ProductCard product={item} />
            </div>
          ))}
    </div>
  );
};
