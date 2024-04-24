import { Product } from '../types/interfaces/Product';

export const discountValue = (product: Product) => (product.discount ? product.discount.replace('%', '') : '0');
