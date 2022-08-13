import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { MILLION, MILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('million', () => {
  describe('format - with no decimal', () => {
    it('should format million', () => {
      expect(friendlyFormat(MILLION)).toMatchSnapshot();
    });

    describe('format - with decimal', () => {
      it('should format million to 2 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format million to 3 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-il` option', () => {
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-il'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-il'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ill` option', () => {
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ill'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ill'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ln` option', () => {
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ln'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format million', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ln'
        };
        expect(friendlyFormat(MILLION_FLOAT, options)).toMatchSnapshot();
      });
    });
  });
});
