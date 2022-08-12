import { friendlyFormat } from '@/friendly-format';
import { BILLION, MILLION, THOUSAND, TRILLION } from '@/numbers';
import { describe, expect, it } from 'vitest';

describe('format', () => {
  it('should format thousand', () => {
    expect(friendlyFormat(THOUSAND)).toBe('1k');
  });

  it('should format million', () => {
    expect(friendlyFormat(MILLION)).toBe('1m');
  });

  it('should format billion', () => {
    expect(friendlyFormat(BILLION)).toBe('1bn');
  });

  it('should format trillion', () => {
    expect(friendlyFormat(TRILLION)).toBe('1tn');
  });
});
