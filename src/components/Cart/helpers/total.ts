import { Product } from '../../../types/interfaces/Product';

export const calculateTotalAmount = (products: Product[]) => {
  return products.reduce((total, product) => {
    const price = product.priceWithDiscount ?? parseFloat(product.price);
    const productTotal = price * product.quantity;
    return total + productTotal;
  }, 0);
};
