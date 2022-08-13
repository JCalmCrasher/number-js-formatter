import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { TRILLION, TRILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('trillion', () => {
  describe('format - with no decimal', () => {
    it('should format trillion', () => {
      expect(friendlyFormat(TRILLION)).toMatchSnapshot();
    });

    describe('format - with decimal', () => {
      it('should format trillion to 2 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format trillion to 3 decimal place', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-il` option', () => {
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-il'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-il'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ill` option', () => {
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 2,
          form: '-ill'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ill'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
    });

    describe('format - with `-ln` option', () => {
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 3,
          form: '-ln'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
      it('should format trillion', () => {
        const options: FormatOptions = {
          noOfDigitsAfterDecimal: 4,
          form: '-ln'
        };
        expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchSnapshot();
      });
    });
  });
});
