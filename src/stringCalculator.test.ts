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

  it('throws for negative numbers and lists all of them', () => {
    expect(() => add('-1,2')).toThrow('negatives not allowed: -1');
    expect(() => add('1,-2,-3')).toThrow('negatives not allowed: -2, -3');
  });

  it('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('2,1000')).toBe(1002); // 1000 is still counted
  });

  it('supports multi-character delimiters', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
    expect(add('//[---]\n10---20---30')).toBe(60);
  });

  it('supports multiple delimiters at once', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
    expect(add('//[**][%%]\n2**3%%5')).toBe(10);
  });


});
