export interface Product {
  productName: string;
  favorite: boolean;
  sale: {
    isActive: boolean;
    amount: number;
  };
  image: string;
  rating: number;
  inStock: boolean;
  description: string;
  price: number;
}
