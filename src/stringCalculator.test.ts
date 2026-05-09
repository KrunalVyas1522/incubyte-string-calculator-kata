import { add } from './stringCalculator';

describe('add()', () => {

  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number itself for a single value', () => {
    expect(add('1')).toBe(1);
    expect(add('9')).toBe(9);
  });

});
