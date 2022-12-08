import { friendlyFormat } from '@/friendly-format';
import { FormatOptions } from '@/types';
import { UNIT, UNIT_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('unit', () => {
  describe('format - with no decimal', () => {
    it('should format unit', () => {
      expect(friendlyFormat(UNIT)).toMatchInlineSnapshot('"1"');
    });

    describe('format - with decimal', () => {
      it('should format unit to 3 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(UNIT_FLOAT, options)).toMatchInlineSnapshot(
          '"1.867"'
        );
      });
      it('should format unit to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(UNIT_FLOAT, options)).toMatchInlineSnapshot(
          '"1.8667"'
        );
      });
    });
  });
});
