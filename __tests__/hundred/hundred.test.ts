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

    describe('format - with `-il` option', () => {
      it('should format hundred to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-il'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.31"'
        );
      });
      it('should format hundred to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-il'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.3141"'
        );
      });
    });

    describe('format - with `-ill` option', () => {
      it('should format hundred to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ill'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.31"'
        );
      });
      it('should format hundred to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ill'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.3141"'
        );
      });
    });

    describe('format - with `-ln` option', () => {
      it('should format hundred to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ln'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.31"'
        );
      });
      it('should format hundred to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ln'
        };
        expect(friendlyFormat(HUNDRED_FLOAT, options)).toMatchInlineSnapshot(
          '"101.3141"'
        );
      });
    });
  });
});
