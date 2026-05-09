// String Calculator - TDD Kata
// Krunal Vyas | Incubyte Assessment

export function add(input: string): number {
  if (input === '') return 0;

  let delimiter: RegExp = /,|\n/;
  let numbers = input;

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\n');
    const header = input.substring(2, newlineIndex);
    numbers = input.substring(newlineIndex + 1);
    delimiter = new RegExp(escape(header));
  }

  const parsed = numbers.split(delimiter).map(Number);

  const negatives = parsed.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  }

  return parsed.filter(n => n <= 1000).reduce((a, b) => a + b, 0);
}


function escape(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
