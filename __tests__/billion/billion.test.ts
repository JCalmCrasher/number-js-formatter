import { friendlyFormat } from '@/friendly-format';
import { FormatOptions } from '@/types';
import { BILLION, BILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('billion', () => {
  describe('format - with no decimal', () => {
    it('should format billion', () => {
      expect(friendlyFormat(BILLION)).toMatchInlineSnapshot('"1bn"');
    });

    describe('format - with decimal', () => {
      it('should format billion to 3 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1.005bn"'
        );
      });
      it('should format billion to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1.0049bn"'
        );
      });
    });

    describe('format - with `-il` option', () => {
      it('should format billion to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-il'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1bil"'
        );
      });
      it('should format billion to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-il'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1.0049bil"'
        );
      });
    });

    describe('format - with `-ill` option', () => {
      it('should format billion to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ill'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1bill"'
        );
      });
      it('should format billion to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ill'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1.0049bill"'
        );
      });
    });

    describe('format - with `-ln` option', () => {
      it('should format billion to 2 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ln'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1bln"'
        );
      });
      it('should format billion to 4 decimal places', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ln'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchInlineSnapshot(
          '"1.0049bln"'
        );
      });
    });
  });
});
