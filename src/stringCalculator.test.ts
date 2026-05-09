import { add } from './stringCalculator';

describe('add()', () => {

  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

});
