import { Product } from '../types/interfaces/Product';

export const cloneProducts = (products: Product[], times: number): Product[] => {
  return products.flatMap((product) =>
    Array(times)
      .fill(null)
      .map(() => ({
        ...product,
        images: [...product.images],
      }))
  );
};
