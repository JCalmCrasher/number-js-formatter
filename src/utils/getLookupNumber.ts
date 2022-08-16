import { ILookup } from '@/types';
import numberDict from './number-lookup';

/**
 * Returns the number from the lookup dictionary.
 * @param number - number to lookup
 * @returns - number found from the lookup dictionary.
 */

export const getNumberFromDict = (number: number) => {
  const lookupNumber =
    numberDict
      .slice()
      .reverse()
      .find((item) => number >= item.value) || ({} as ILookup);

  return {
    value: lookupNumber.value,
    symbol: lookupNumber.symbol,
    label: lookupNumber.label
  };
};
