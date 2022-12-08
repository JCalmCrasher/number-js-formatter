import { friendlyFormat } from '@/friendly-format';
import { FormatOptions } from '@/types';
import { TEN, TEN_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('ten', () => {
  describe('format - with no decimal', () => {
    it('should format ten', () => {
      expect(friendlyFormat(TEN)).toMatchInlineSnapshot('"10"');
    });

    describe('format - with decimal', () => {
      it('should format ten to 3 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(TEN_FLOAT, options)).toMatchInlineSnapshot(
          '"10.953"'
        );
      });
      it('should format ten to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(TEN_FLOAT, options)).toMatchInlineSnapshot(
          '"10.9528"'
        );
      });
    });
  });
});
