import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { THOUSAND, THOUSAND_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('format thousand', () => {
  describe('with no decimal', () => {
    it('should format thousand', () => {
      expect(friendlyFormat(THOUSAND)).toMatchInlineSnapshot('"1k"');
    });
  });
  describe('with decimal', () => {
    it('should format thousand to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2
      };
      expect(friendlyFormat(THOUSAND_FLOAT, options)).toMatchInlineSnapshot(
        '"1.01k"'
      );
    });
    it('should format thousand to 3 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 3
      };
      expect(friendlyFormat(THOUSAND_FLOAT, options)).toMatchInlineSnapshot(
        '"1.010k"'
      );
    });
  });
});
