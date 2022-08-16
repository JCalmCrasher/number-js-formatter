import { FormatOptions, friendlyFormat } from '@/friendly-format';
import { MILLION, MILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('format million', () => {
  describe('with no decimal', () => {
    it('should format million', () => {
      expect(friendlyFormat(MILLION)).toMatchInlineSnapshot('"1m"');
    });
  });
  describe('with decimal', () => {
    it('should format million to 3 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 3
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.924m"'
      );
    });
    it('should format million to 3 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.9235m"'
      );
    });
  });

  describe('with `-il` option', () => {
    it('should format million to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2,
        form: '-il'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.92mil"'
      );
    });
    it('should format million to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-il'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.9235mil"'
      );
    });
  });

  describe('format - with `-ill` option', () => {
    it('should format million to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2,
        form: '-ill'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.92mill"'
      );
    });
    it('should format million to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-ill'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.9235mill"'
      );
    });
  });

  describe('format - with `-ln` option', () => {
    it('should format million to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2,
        form: '-ln'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.92mln"'
      );
    });
    it('should format million to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-ln'
      };
      expect(friendlyFormat(MILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.9235mln"'
      );
    });
  });
});
