export interface Image {
  image: string;
}

export interface Product {
  id: number;
  product_url: string;
  product_type: string;
  price_currency: string;
  images: Image[];
  title: string;
  price: string;
  description: string;
  quantity_in_stock: number;
  product_quantity: string;
  discount: string;
  rating: number;
  components: string;
  price_currency_symbol: string;
}

export interface TestProduct {
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
  salePrice?: number;
  price: number;
}
