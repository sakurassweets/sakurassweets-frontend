// export const hasDiscount = (discount: string) => {
//   if (discount === undefined || discount === '') {
//     return false;
//   }
//   return discount !== '0%';
// };
export const hasDiscount = (discount?: string) => {
  return discount && discount !== '0%' && discount.trim() !== '';
};
