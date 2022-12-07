import { FormatOptions } from './types';
import formatNumber from './utils/formatNumber';
import { getNumberFromDict } from './utils/getLookupNumber';

export function friendlyFormat(
  number: number,
  options: FormatOptions = { noOfDigitsAfterDecimal: 0, form: 'default' }
) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Number is not a number');
  }
  const { value, label, symbol } = getNumberFromDict(number);
  let result = '';

  if (label === 'hundred') {
    result = formatNumber(number, options.noOfDigitsAfterDecimal);
  } else if (label === 'thousand') {
    result =
      formatNumber(number / value, options.noOfDigitsAfterDecimal) + symbol[0];
  } else {
    switch (options.form) {
      case '-il':
        result =
          formatNumber(number / value, options.noOfDigitsAfterDecimal) +
          symbol[1];
        break;
      case '-ill':
        result =
          formatNumber(number / value, options.noOfDigitsAfterDecimal) +
          symbol[2];
        break;
      case '-ln':
        result =
          formatNumber(number / value, options.noOfDigitsAfterDecimal) +
          symbol[3];
        break;
      default:
        result =
          formatNumber(number / value, options.noOfDigitsAfterDecimal) +
          symbol[0];
        break;
    }
  }

  return result;
}
