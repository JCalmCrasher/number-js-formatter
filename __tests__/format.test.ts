import { describe, expect, test } from 'vitest';
import { friendlyFormat } from '@/friendly-format';

describe('format', () => {
  test('format thousand', () => {
    const numb1 = 1000000;

    expect(friendlyFormat(numb1)).toBe('1m');
  });
});
