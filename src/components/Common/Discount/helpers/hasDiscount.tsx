export const hasDiscount = (discount: string) => {
  if (discount === undefined || discount === '') {
    return false;
  }
  return discount !== '0%';
};
