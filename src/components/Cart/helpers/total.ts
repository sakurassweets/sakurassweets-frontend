import { Product } from '../../../types/interfaces/Product';

export const calculateTotalAmount = (products: Product[]) => {
  return products.reduce((total, product) => total + (product.priceWithDiscount ?? 0), 0);
};
