export default function formatNumber(number: number, digits: number) {
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

  return number.toFixed(digits).replace(regex, '$1');
}
