import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { THOUSAND, THOUSAND_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('thousand', () => {
  describe('format - with no decimal', () => {
    it('should format thousand', () => {
      expect(friendlyFormat(THOUSAND)).toBe('1k');
    });

    describe('format - with decimal', () => {
      it('should format thousand to 2 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2
        };
        expect(friendlyFormat(THOUSAND_FLOAT, options)).toBe('1.01k');
      });
      it('should format thousand to 3 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(THOUSAND_FLOAT, options)).toBe('1.010k');
      });
    });
  });
});
