// export const calculateDiscountedPrice = (priceStr: string, discountStr: string) => {
//   const price = parseFloat(priceStr);
//   const discountPercent = discountStr ? parseFloat(discountStr) : 0;
//   const discountAmount = (price * discountPercent) / 100;
//   const finalPrice = price - discountAmount;
//   return finalPrice.toFixed(2);
// };

// export const calculateDiscountedPrice = (price: string, discount: string): number => {
//   const numericPrice = parseFloat(price);
//   const numericDiscount = parseFloat(discount.replace('%', ''));
//   return numericPrice - (numericPrice * numericDiscount) / 100;
// };

export const calculateDiscountedPrice = (price: string, discount: string): number => {
  const numericPrice = parseFloat(price);
  const numericDiscount = parseFloat(discount.replace('%', ''));
  return numericPrice - (numericPrice * numericDiscount) / 100;
};
