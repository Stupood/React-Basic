export function currencyFormat(number) {
  if (number === null || number === undefined) {
    return '';
  }
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(number);
}