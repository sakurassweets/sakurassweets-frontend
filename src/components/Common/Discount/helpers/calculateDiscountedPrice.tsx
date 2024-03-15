export const calculateDiscountedPrice = (priceStr: string, discountStr: string) => {
  const price = parseFloat(priceStr);
  const discountPercent = discountStr ? parseFloat(discountStr) : 0;
  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = price - discountAmount;
  return finalPrice.toFixed(2);
};
