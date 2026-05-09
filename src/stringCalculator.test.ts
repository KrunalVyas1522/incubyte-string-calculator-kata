import { add } from './stringCalculator';

describe('add()', () => {

  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number itself for a single value', () => {
    expect(add('1')).toBe(1);
    expect(add('9')).toBe(9);
  });

  it('adds two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  it('handles any amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  it('treats newlines as valid delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1\n2\n3')).toBe(6);
  });

  it('supports a custom single-character delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//|\n4|5|6')).toBe(15);
  });

});
