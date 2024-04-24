import { calculateDiscountedPrice } from '../components/Common/Discount/helpers';
import { Product } from '../types/interfaces/Product';

export const finalPrice = (product: Product, discountValue?: string): number => {
  if (product.discount && discountValue) {
    return calculateDiscountedPrice(product.price, discountValue);
  } else {
    return parseFloat(product.price);
  }
};
