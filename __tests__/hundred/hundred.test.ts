import { friendlyFormat } from '@/friendly-format';
import { FormatOptions } from '@/types';
import { HUNDRED, HUNDRED_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('hundred', () => {
  describe('format - with no decimal', () => {
    it('should format hundred', () => {
      expect(friendlyFormat(HUNDRED)).toMatchInlineSnapshot('"100"');
    });

    describe('format - with decimal', () => {
      it('should format hundred to 3 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.314"'
        );
      });
      it('should format hundred to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.3141"'
        );
      });
    });
  });
});
