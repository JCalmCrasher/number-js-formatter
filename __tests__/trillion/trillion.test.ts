import { friendlyFormat } from '@/friendly-format';
import { FormatOptions } from '@/types';
import { TRILLION, TRILLION_FLOAT } from '@/utils/mocks/numbers';
import { describe, expect, it } from 'vitest';

describe('format trillion', () => {
  describe('with no decimal', () => {
    it('should format trillion', () => {
      expect(friendlyFormat(TRILLION)).toMatchInlineSnapshot('"1tn"');
    });
  });
  describe('with decimal', () => {
    it('should format trillion to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 3
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.106tn"'
      );
    });
    it('should format trillion to 3 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.1058tn"'
      );
    });
  });

  describe('with `-il` option', () => {
    it('should format trillion to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2,
        form: '-il'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.11tril"'
      );
    });
    it('should format trillion to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-il'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.1058tril"'
      );
    });
  });

  describe('with `-ill` option', () => {
    it('should format trillion to 2 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 2,
        form: '-ill'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.11trill"'
      );
    });
    it('should format trillion to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-ill'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.1058trill"'
      );
    });
  });

  describe('with `-ln` option', () => {
    it('should format trillion to 3 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 3,
        form: '-ln'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.106tln"'
      );
    });
    it('should format trillion to 4 decimal places', () => {
      const options: FormatOptions = {
        noOfDigitsAfterDecimal: 4,
        form: '-ln'
      };
      expect(friendlyFormat(TRILLION_FLOAT, options)).toMatchInlineSnapshot(
        '"1.1058tln"'
      );
    });
  });
});
