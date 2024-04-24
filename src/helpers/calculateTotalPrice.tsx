import { Product } from '../types/interfaces/Product';
import { finalPrice } from './finalPrice';

interface TotalPriceProps {
  quantity: number;
  product: Product;
  discountValue?: number;
}

export const calculateTotalPrice = ({ quantity, product, discountValue }: TotalPriceProps): number => {
  if (quantity <= 0 || product.price === '0' || isNaN(parseFloat(product.price))) {
    // Якщо кількість товару нуль або ціна товару нуль, повертаємо 0
    return 0;
  }

  const finalUnitPrice = finalPrice(product, discountValue?.toString()); // Convert discountValue to string
  return quantity * finalUnitPrice;
};
