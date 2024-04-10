export function getWordForm(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  // For numbers ending in 1 (e.g., 21, 31), but not in 11 (e.g., 111)
  if (mod10 === 1 && mod100 !== 11) {
    return 'продукт';
  }
  // For numbers ending in 2, 3, or 4 (e.g., 2, 3, 4, 22, 23, 24), but not in 12, 13, 14
  else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return 'продукти';
  }
  // For everything else, use the plural form
  else {
    return 'продуктів';
  }
}
