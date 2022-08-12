import { friendlyFormat } from '@/friendly-format';
import { BILLION, MILLION, THOUSAND, TRILLION } from '@/numbers';
import { describe, expect, it } from 'vitest';

describe('format', () => {
  it('should format thousand', () => {
    expect(friendlyFormat(THOUSAND)).toMatchSnapshot();
  });

  it('should format million', () => {
    expect(friendlyFormat(MILLION)).toMatchSnapshot();
  });

  it('should format billion', () => {
    expect(friendlyFormat(BILLION)).toMatchSnapshot();
  });

  it('should format trillion', () => {
    expect(friendlyFormat(TRILLION)).toMatchSnapshot();
  });
});
