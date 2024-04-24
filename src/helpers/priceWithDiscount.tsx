import { calculateDiscountedPrice, hasDiscount } from '../components/Common/Discount/helpers';
import { Product } from '../types/interfaces/Product';

export function priceWithDiscount(products: Product[]): Product[] {
  return products.map((product) => ({
    ...product,
    quantity: 1,
    priceWithDiscount: hasDiscount(product.discount)
      ? calculateDiscountedPrice(product.price, product.discount)
      : parseFloat(product.price),
  }));
}
