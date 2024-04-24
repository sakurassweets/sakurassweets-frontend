import { useState, useEffect } from 'react';
import { Product } from '../../types/interfaces/Product';
import { calculateDiscountedPrice, hasDiscount } from '../../components/Common/Discount/helpers';

function useCart(initialProducts: Product[] = []) {
  const [products, setProducts] = useState<Product[]>(
    initialProducts.map((product) => ({
      ...product,
      quantity: 1, // Початкова кількість кожного продукту
      priceWithDiscount: hasDiscount(product.discount)
        ? calculateDiscountedPrice(product.price, product.discount)
        : parseFloat(product.price), // Розрахунок ціни зі знижкою
    }))
  );

  // Синхронізація з localStorage
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setProducts(
        JSON.parse(cartData).map((product: Product) => ({
          ...product,
          priceWithDiscount: hasDiscount(product.discount)
            ? calculateDiscountedPrice(product.price, product.discount)
            : parseFloat(product.price), // Забезпечуємо оновлення ціни при завантаженні
        }))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  // Функція для оновлення кількості продукту
  const updateQuantity = (productId: string | number, quantity: number) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? {
            ...product,
            quantity,
            priceWithDiscount: hasDiscount(product.discount) // Оновлення ціни зі знижкою, якщо змінюється кількість
              ? calculateDiscountedPrice(product.price, product.discount)
              : parseFloat(product.price),
          }
        : product
    );
    setProducts(updatedProducts);
  };

  // Функція для видалення продукту з корзини
  const removeProductById = (productId: string | number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return {
    products,
    updateQuantity,
    removeProductById,
  };
}
export default useCart;
