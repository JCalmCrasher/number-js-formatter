import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { BILLION, BILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('billion', () => {
  describe('format - with no decimal', () => {
    it('should format billion', () => {
      expect(friendlyFormat(BILLION)).toMatchSnapshot();
    });

    describe('format - with decimal', () => {
      it('should format billion to 2 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format billion to 3 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-il` option', () => {
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-il'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-il'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ill` option', () => {
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ill'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ill'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ln` option', () => {
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ln'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format billion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ln'
        };
        expect(friendlyFormat(BILLION_FLOAT, options)).toMatchSnapshot();
      });
    });
  });
});
